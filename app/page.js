'use client'
import { useState } from 'react'

const lessons = {
  salutations: {
    title: 'Salutations',
    words: [
      { turkish: 'Merhaba', french: 'Bonjour', audio: 'mer-ha-ba' },
      { turkish: 'Günaydın', french: 'Bonjour (matin)', audio: 'gü-nay-dın' },
      { turkish: 'İyi akşamlar', french: 'Bonsoir', audio: 'i-yi ak-cham-lar' },
      { turkish: 'İyi geceler', french: 'Bonne nuit', audio: 'i-yi gue-djé-ler' },
      { turkish: 'Hoşça kal', french: 'Au revoir', audio: 'hoch-tcha kal' },
      { turkish: 'Güle güle', french: 'Au revoir (celui qui part)', audio: 'gü-lé gü-lé' },
      { turkish: 'Nasılsın?', french: 'Comment vas-tu?', audio: 'na-sıl-sın' },
      { turkish: 'İyiyim', french: 'Je vais bien', audio: 'i-yi-yim' },
    ]
  },
  base: {
    title: 'Mots de base',
    words: [
      { turkish: 'Evet', french: 'Oui', audio: 'é-vet' },
      { turkish: 'Hayır', french: 'Non', audio: 'ha-yır' },
      { turkish: 'Lütfen', french: 'S\'il vous plaît', audio: 'lüt-fen' },
      { turkish: 'Teşekkür ederim', french: 'Merci', audio: 'té-chék-kür é-dé-rim' },
      { turkish: 'Özür dilerim', french: 'Pardon', audio: 'ö-zur di-lé-rim' },
      { turkish: 'Ne demek', french: 'De rien', audio: 'né dé-mek' },
      { turkish: 'Su', french: 'Eau', audio: 'sou' },
      { turkish: 'Ekmek', french: 'Pain', audio: 'ek-mek' },
    ]
  },
  chiffres: {
    title: 'Chiffres',
    words: [
      { turkish: 'Bir', french: 'Un', audio: 'bir' },
      { turkish: 'İki', french: 'Deux', audio: 'i-ki' },
      { turkish: 'Üç', french: 'Trois', audio: 'üch' },
      { turkish: 'Dört', french: 'Quatre', audio: 'dört' },
      { turkish: 'Beş', french: 'Cinq', audio: 'bech' },
      { turkish: 'Altı', french: 'Six', audio: 'al-tı' },
      { turkish: 'Yedi', french: 'Sept', audio: 'yé-di' },
      { turkish: 'Sekiz', french: 'Huit', audio: 'sé-kiz' },
      { turkish: 'Dokuz', french: 'Neuf', audio: 'do-kouz' },
      { turkish: 'On', french: 'Dix', audio: 'on' },
    ]
  },
  famille: {
    title: 'Famille',
    words: [
      { turkish: 'Anne', french: 'Mère', audio: 'an-né' },
      { turkish: 'Baba', french: 'Père', audio: 'ba-ba' },
      { turkish: 'Kardeş', french: 'Frère/Sœur', audio: 'kar-dech' },
      { turkish: 'Ağabey', french: 'Grand frère', audio: 'a-a-bey' },
      { turkish: 'Abla', french: 'Grande sœur', audio: 'ab-la' },
      { turkish: 'Çocuk', french: 'Enfant', audio: 'tcho-djouk' },
      { turkish: 'Aile', french: 'Famille', audio: 'a-i-lé' },
    ]
  }
}

export default function Home() {
  const [currentLesson, setCurrentLesson] = useState('salutations')
  const [quizMode, setQuizMode] = useState(false)
  const [currentQuizIndex, setCurrentQuizIndex] = useState(0)
  const [score, setScore] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)
  const [userAnswer, setUserAnswer] = useState('')

  const startQuiz = () => {
    setQuizMode(true)
    setCurrentQuizIndex(0)
    setScore(0)
    setShowAnswer(false)
    setUserAnswer('')
  }

  const checkAnswer = () => {
    const correct = userAnswer.toLowerCase().trim() ===
                   lessons[currentLesson].words[currentQuizIndex].turkish.toLowerCase()
    if (correct) setScore(score + 1)
    setShowAnswer(true)
  }

  const nextQuestion = () => {
    if (currentQuizIndex < lessons[currentLesson].words.length - 1) {
      setCurrentQuizIndex(currentQuizIndex + 1)
      setShowAnswer(false)
      setUserAnswer('')
    } else {
      setQuizMode(false)
    }
  }

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px'
    }}>
      <div style={{
        maxWidth: '900px',
        margin: '0 auto',
        background: 'white',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
        overflow: 'hidden'
      }}>
        {/* Header */}
        <div style={{
          background: 'linear-gradient(135deg, #e74c3c 0%, #c0392b 100%)',
          padding: '30px',
          color: 'white',
          textAlign: 'center'
        }}>
          <h1 style={{ margin: '0 0 10px 0', fontSize: '2.5em' }}>🇹🇷 Apprendre le Turc</h1>
          <p style={{ margin: 0, opacity: 0.9, fontSize: '1.1em' }}>Türkçe öğrenin!</p>
        </div>

        {/* Lesson Selector */}
        {!quizMode && (
          <div style={{ padding: '30px' }}>
            <h2 style={{ color: '#2c3e50', marginBottom: '20px' }}>Choisissez une leçon</h2>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '15px',
              marginBottom: '30px'
            }}>
              {Object.keys(lessons).map(key => (
                <button
                  key={key}
                  onClick={() => setCurrentLesson(key)}
                  style={{
                    padding: '20px',
                    fontSize: '1.1em',
                    border: currentLesson === key ? '3px solid #e74c3c' : '2px solid #ddd',
                    borderRadius: '10px',
                    background: currentLesson === key ? '#fff5f5' : 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s',
                    fontWeight: currentLesson === key ? 'bold' : 'normal',
                    color: currentLesson === key ? '#e74c3c' : '#2c3e50'
                  }}
                >
                  {lessons[key].title}
                </button>
              ))}
            </div>

            {/* Vocabulary List */}
            <div style={{
              background: '#f8f9fa',
              padding: '25px',
              borderRadius: '10px',
              marginBottom: '20px'
            }}>
              <h3 style={{ color: '#2c3e50', marginBottom: '20px' }}>
                📚 {lessons[currentLesson].title}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {lessons[currentLesson].words.map((word, idx) => (
                  <div key={idx} style={{
                    background: 'white',
                    padding: '15px 20px',
                    borderRadius: '8px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                  }}>
                    <div>
                      <span style={{
                        fontSize: '1.3em',
                        fontWeight: 'bold',
                        color: '#e74c3c',
                        marginRight: '15px'
                      }}>
                        {word.turkish}
                      </span>
                      <span style={{ color: '#7f8c8d', fontSize: '0.9em' }}>
                        ({word.audio})
                      </span>
                    </div>
                    <span style={{ color: '#2c3e50', fontSize: '1.1em' }}>
                      {word.french}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Start Quiz Button */}
            <button
              onClick={startQuiz}
              style={{
                width: '100%',
                padding: '15px',
                fontSize: '1.2em',
                background: 'linear-gradient(135deg, #27ae60 0%, #229954 100%)',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 'bold',
                boxShadow: '0 4px 15px rgba(39,174,96,0.3)'
              }}
            >
              🎯 Commencer le Quiz
            </button>
          </div>
        )}

        {/* Quiz Mode */}
        {quizMode && (
          <div style={{ padding: '30px' }}>
            <div style={{
              background: '#f8f9fa',
              padding: '20px',
              borderRadius: '10px',
              marginBottom: '20px',
              textAlign: 'center'
            }}>
              <h3 style={{ color: '#2c3e50', margin: '0 0 10px 0' }}>
                Question {currentQuizIndex + 1}/{lessons[currentLesson].words.length}
              </h3>
              <div style={{ fontSize: '1.1em', color: '#27ae60' }}>
                Score: {score}/{currentQuizIndex + (showAnswer ? 1 : 0)}
              </div>
            </div>

            <div style={{
              background: '#fff5f5',
              padding: '40px',
              borderRadius: '10px',
              textAlign: 'center',
              marginBottom: '20px'
            }}>
              <p style={{ color: '#7f8c8d', marginBottom: '15px' }}>Traduisez en turc:</p>
              <h2 style={{ color: '#e74c3c', fontSize: '2em', margin: '0' }}>
                {lessons[currentLesson].words[currentQuizIndex].french}
              </h2>
            </div>

            {!showAnswer ? (
              <div>
                <input
                  type="text"
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && checkAnswer()}
                  placeholder="Votre réponse..."
                  style={{
                    width: '100%',
                    padding: '15px',
                    fontSize: '1.2em',
                    border: '2px solid #ddd',
                    borderRadius: '10px',
                    marginBottom: '15px',
                    boxSizing: 'border-box'
                  }}
                  autoFocus
                />
                <button
                  onClick={checkAnswer}
                  style={{
                    width: '100%',
                    padding: '15px',
                    fontSize: '1.2em',
                    background: 'linear-gradient(135deg, #3498db 0%, #2980b9 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  Vérifier
                </button>
              </div>
            ) : (
              <div>
                <div style={{
                  padding: '20px',
                  borderRadius: '10px',
                  background: userAnswer.toLowerCase().trim() ===
                            lessons[currentLesson].words[currentQuizIndex].turkish.toLowerCase()
                            ? '#d4edda' : '#f8d7da',
                  color: userAnswer.toLowerCase().trim() ===
                         lessons[currentLesson].words[currentQuizIndex].turkish.toLowerCase()
                         ? '#155724' : '#721c24',
                  marginBottom: '15px',
                  textAlign: 'center'
                }}>
                  <h3 style={{ margin: '0 0 10px 0' }}>
                    {userAnswer.toLowerCase().trim() ===
                     lessons[currentLesson].words[currentQuizIndex].turkish.toLowerCase()
                     ? '✅ Correct!' : '❌ Incorrect'}
                  </h3>
                  <p style={{ margin: 0, fontSize: '1.1em' }}>
                    Réponse: <strong>{lessons[currentLesson].words[currentQuizIndex].turkish}</strong>
                    <br />
                    <span style={{ fontSize: '0.9em' }}>
                      ({lessons[currentLesson].words[currentQuizIndex].audio})
                    </span>
                  </p>
                </div>
                <button
                  onClick={nextQuestion}
                  style={{
                    width: '100%',
                    padding: '15px',
                    fontSize: '1.2em',
                    background: 'linear-gradient(135deg, #27ae60 0%, #229954 100%)',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: 'bold'
                  }}
                >
                  {currentQuizIndex < lessons[currentLesson].words.length - 1
                    ? 'Question Suivante →'
                    : '🏆 Terminer le Quiz'}
                </button>
              </div>
            )}
          </div>
        )}

        {/* Footer */}
        <div style={{
          background: '#f8f9fa',
          padding: '20px',
          textAlign: 'center',
          color: '#7f8c8d',
          borderTop: '1px solid #e9ecef'
        }}>
          <p style={{ margin: 0 }}>💡 Conseil: Répétez à voix haute pour améliorer votre prononciation!</p>
        </div>
      </div>
    </div>
  )
}
