const handeResult = (quizId, collectedAnswers, resultAnswersMap) => {
  const crypto = require('crypto')
  const decipher = crypto.createDecipher('aes192', 'a password')
  var encrypted = resultAnswersMap
  var decrypted = decipher.update(encrypted, 'hex', 'utf8')
  decrypted += decipher.final('utf8')

  const realResultAnswersMap = JSON.parse(decrypted)

  let age = 0
  collectedAnswers.map((v, i) => {
    const answerOrder = v.a
    const map = realResultAnswersMap[i].split(',')

    age += Number(map[answerOrder - 1])
  })
  let msg = ''
  switch (true) {
    case age > 50: {
      msg = 'Tâm hồn già đời'
      break
    }
    case age > 35: {
      msg = 'Tâm hồn trưởng thành'
      break
    }
    case age > 25: {
      msg = 'Tâm hồn thanh niên'
      break
    }
    case age > 15: {
      msg = 'Mới lớn'
      break
    }
    default: {
      msg = 'Còn thơ ngây'
    }
  }
  return {
    age,
    msg,
  }
}

export async function handler(event, context, callback) {
  const { quizId, collectedAnswers, resultAnswersMap } = JSON.parse(event.body)

  const rs = handeResult(quizId, collectedAnswers, resultAnswersMap)
  return {
    statusCode: 200,
    isBase64Encoded: false,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
    },
    body: JSON.stringify(rs),
  }
}
