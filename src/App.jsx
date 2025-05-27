import React, { useState, useEffect } from 'react';
import './App.css';

const rawPassages = [
  {
    id: 'textA-A',
    title: 'Text A-A',
    text: `Edward rang the Millers’ doorbell. Mr. and Mrs. Miller had moved into the neighborhood last month. They had a five-year-old son, and they had asked Edward to watch him that evening while they went out. “Hello, Edward,” Mrs. Miller said as she opened the door. Mr. Miller stood behind her with a boy at his side. “This is Lucas,” Mr. Miller said. “Lucas, this is Edward. He will watch you tonight while Mom and I are out.” The little boy waved shyly to Edward. The Millers asked Edward to <u>(A) entertain</u> Lucas for an hour and then put him in bed.

After Lucas’s parents left, Edward went with the boy to his room. They played some games and built a tower out of wooden blocks. “It’s time for you to go to sleep now,” Edward said. Lucas looked disappointed, but he changed into his pajamas and got into bed.
“Will you read me a story?” he asked Edward. Edward took a picture book from the shelf and read it to Lucas. When he finished reading the book to Lucas, he turned out the light and said good night. But as soon as Edward left the room, Lucas called out to him. “What’s wrong?” Edward asked.
“I’m afraid of the dark,” Lucas explained.
Edward turned on the small light by Lucas’s bed. “Good night,” Edward said again.
Five minutes later, Lucas cried out again.
“What’s wrong now?” Edward asked.
“I thought I heard a sound,” Lucas said. “I think there might be a monster under my bed.”
Edward explained that there was no monster under the bed, but Lucas was still afraid. Finally, Edward went to the kitchen and found a flashlight. He shined the flashlight under Lucas’s bed. “See?” he said. “No monster.”
“Will you stay with me in case <u>(B) one</u> comes?” Lucas begged.
Edward could see that the little boy was frightened. He agreed to sit in the chair by Lucas’s bed, with the flashlight in his hand. Edward sat in the chair, waiting for Lucas to fall asleep. The dim light in the room and the soft chair made Edward feel tired, too. He closed his eyes.
The next thing he knew someone was shaking him gently. Edward opened his eyes and saw Mr. and Mrs. Miller.
“We’re home,” Mrs. Miller whispered. “Thank you for taking care of Lucas. We had a wonderful evening.”
Edward shook himself in amazement. Was the evening over already?`,
    questions: [
      { question: 'Why did Edward go to the Millers’ house?', choices: ['A) To borrow a flashlight', 'B) To take care of Lucas', 'C) To welcome the Millers to the neighborhood', 'D) To help the Millers move into their house'], answer: 'b' },
      { question: 'The underlined word <u>(A) entertain</u> is closest in meaning to _______.', choices: ['A) look for', 'B) cook for', 'C) play with', 'D) argue with'], answer: 'c' },
      { question: 'What did Edward and Lucas do before Lucas went to bed?', choices: ['A) They built a tower of blocks.', 'B) They looked for a flashlight.', 'C) They put books on a shelf.', 'D) They drew pictures.'], answer: 'a' },
      { question: 'The underlined word <u>(B) one</u> refers to a _______.', choices: ['A) shelf', 'B) chair', 'C) monster', 'D) flashlight'], answer: 'c' },
      { question: 'How did Lucas probably feel about going to bed?', choices: ['A) Disappointed and afraid', 'B) Angry and nervous', 'C) Relieved and tired', 'D) Sad and confused'], answer: 'a' },
      { question: 'Why did Lucas keep calling out to Edward?', choices: ['A) He saw something under the bed.', 'B) He did not want to be left alone.', 'C) He could not reach the book on the shelf.', 'D) He forgot where the wooden blocks were.'], answer: 'b' }
    ]
  },
  {
    id: 'textA-B',
    title: 'Text A-B',
    text: `The longer food is kept, the more likely it is to attract insects. Even foods stored in containers often attract bugs. To solve this problem, scientists have been working with different odors in an attempt to find <u>(A) one</u> strong enough to keep insects from going near food. One possibility would be to use plants with strong smells, like garlic or pine, to keep insects away. Unfortunately, however, using these smells might keep some people away too!

A more promising repellent is citronella oil, which comes from a type of lemongrass. An experiment was done using this oil with a certain insect, the red flour beetle. Scientists sprayed cardboard boxes with citronella oil and noticed that the beetles did not enter those boxes. They were much more interested in boxes that were not sprayed.

One problem with using citronella oil as a repellent, however, is that it is quite <u>(B) ephemeral</u>—it simply does not last very long. After a few months it loses its smell, and bugs no longer find it unpleasant. Scientists hope to improve citronella oil so that its <u>(C) scent</u> remains strong for a longer time. It will also be necessary to make sure that the oil is not harmful to people, as scientists are still not sure whether it is safe to use around food.`,
    questions: [
      { question: 'What is the passage mainly about?', choices: ['A) Oils used in cooking', 'B) Ways of protecting food', 'C) The behavior of a kind of beetle', 'D) Smells produced by different grasses'], answer: 'b' },
      { question: 'The underlined word <u>(A) one</u> refers to _______.', choices: ['A) an odor', 'B) an insect', 'C) a scientist', 'D) a container'], answer: 'a' },
      { question: 'What does the author imply about the odors of garlic and pine?', choices: ['A) They last for a long time.', 'B) They are not always very strong.', 'C) They can be unpleasant to people.', 'D) They attract certain species of beetles.'], answer: 'c' },
      { question: 'What are repellents?', choices: ['A) A food source for beetles', 'B) Machines used to get oil from plants', 'C) Substances used to keep insects away', 'D) Chemicals used to speed up plant growth'], answer: 'c' },
      { question: 'Which substance is NOT mentioned as being unpleasant to insects?', choices: ['A) Pine', 'B) Flour', 'C) Garlic', 'D) Citronella oil'], answer: 'b' },
      { question: 'What does the author say about the sprayed boxes in the experiment?', choices: ['A) Beetles avoided them.', 'B) They were very heavy.', 'C) They did not contain much food.', 'D) Many insects were trapped in them.'], answer: 'a' },
      { question: 'The underlined word <u>(B) ephemeral</u> is closest in meaning to _______.', choices: ['A) weightless', 'B) short-lived', 'C) overpriced', 'D) not distinguishable'], answer: 'b' },
      { question: 'What are scientists hoping to do in the future?', choices: ['A) Breed larger beetles', 'B) Produce better-tasting foods', 'C) Grow lemongrass in greater quantities', 'D) Make the odor of citronella oil last longer'], answer: 'd' },
      { question: 'The underlined word <u>(C) scent</u> is closest in meaning to _______.', choices: ['A) smell', 'B) flavor', 'C) nature', 'D) standard'], answer: 'a' },
      { question: 'What do scientists still not know about citronella oil?', choices: ['A) What chemicals it contains', 'B) Where it comes from', 'C) Why beetles like it', 'D) How safe it is'], answer: 'd' }
    ]
  },
  {
    id: 'textA-C',
    title: 'Text A-C',
    text: `When another old cave is discovered in the south of France, it is not usually news. Rather, it is an ordinary event. Such discoveries are so frequent these days that hardly anybody <u>(A) pays heed to</u> them. However, when the Lascaux cave complex was discovered in 1940, the world was amazed. Painted directly on its walls were hundreds of scenes showing how people lived thousands of years ago. The scenes show people hunting animals, such as bison or wildcats. Other images <u>(B) depict</u> birds and, most noticeably, horses, which appear in more than 300 wall images, by far outnumbering all other animals.

Early artists drawing these animals accomplished a monumental and difficult task. <u>(C) They</u> did not limit themselves to the easily accessible walls but carried their painting materials to spaces that required climbing steep walls or crawling into narrow passages in the Lascaux complex.

Unfortunately, the paintings have been exposed to the destructive action of water and temperature changes, which easily wear the images away. Because the Lascaux caves have many entrances, air movement has also damaged the images inside. Although they are not out in the open air, where natural light would have destroyed them long ago, many of the images have deteriorated and are barely recognizable. To prevent further damage, the site was closed to tourists in 1963, 23 years after it was discovered.`,
    questions: [
      { question: 'Which title best summarizes the main idea of the passage?', choices: ['A) Wild Animals in Art', 'B) Hidden Prehistoric Paintings', 'C) Exploring Caves Respectfully', 'D) Determining the Age of French Caves'], answer: 'b' },
      { question: 'The underlined words <u>(A) pays heed to</u> are closest in meaning to _______.', choices: ['A) discovers', 'B) watches', 'C) notices', 'D) buys'], answer: 'c' },
      { question: 'Based on the passage, what is probably true about the south of France?', choices: ['A) It is home to rare animals.', 'B) It has a large number of caves.', 'C) It is known for horse-racing events.', 'D) It has attracted many famous artists.'], answer: 'b' },
      { question: 'According to the passage, which animals appear most often on the cave walls?', choices: ['A) Birds', 'B) Bison', 'C) Horses', 'D) Wild cats'], answer: 'c' },
      { question: 'The underlined word <u>(B) depict</u> is closest in meaning to _______.', choices: ['A) show', 'B) hunt', 'C) count', 'D) draw'], answer: 'a' },
      { question: 'Why was painting inside the Lascaux complex a difficult task?', choices: ['A) It was completely dark inside.', 'B) The caves were full of wild animals.', 'C) Painting materials were hard to find.', 'D) Many painting spaces were difficult to reach.'], answer: 'd' },
      { question: 'The underlined word <u>(C) They</u> refers to _______.', choices: ['A) walls', 'B) artists', 'C) animals', 'D) materials'], answer: 'b' },
      { question: 'According to the passage, all of the following have caused damage to the paintings EXCEPT _______.             *except: ~를 제외하고', choices: ['A) temperature changes', 'B) air movement', 'C) water', 'D) light'], answer: 'd' },
      { question: 'What does the passage say happened at the Lascaux caves in 1963?', choices: ['A) Visitors were prohibited from entering.', 'B) A new lighting system was installed.', 'C) Another part was discovered.', 'D) A new entrance was created.'], answer: 'a' }
    ]
  }
];


function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function App() {
  const [info, setInfo] = useState({ grade: '2학년', class: '', number: '', name: '' });
  const [started, setStarted] = useState(false);
  const [passages, setPassages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState({});
  const [timeLeft, setTimeLeft] = useState(1800); // 30분
  const [submitted, setSubmitted] = useState(false);
  const [autoSubmitted, setAutoSubmitted] = useState(false);

  useEffect(() => {
    if (started) {
      setPassages(shuffleArray(rawPassages));
    }
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmit(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [started]);

  const handleSelect = (qid, choice) => {
    setResponses(prev => ({ ...prev, [qid]: choice }));
  };

  const handleSubmit = async (auto = false) => {
    if (!auto && !window.confirm('제출하시겠습니까?')) return;

    const results = [];
    passages.forEach((p) => {
      p.questions.forEach((q, idx) => {
        const qid = `${p.id}_q${idx}`;
        results.push({
          grade: info.grade,
          class: info.class,
          number: info.number,
          name: info.name,
          passage: p.id,
          question: q.question,
          selected: responses[qid] || '',
          correct: q.answer,
          isCorrect: (responses[qid] || '') === q.answer
        });
      });
    });

    try {
      await fetch('https://sheetdb.io/api/v1/x3i64idfqyd0q', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: results })
      });
      setSubmitted(true);
      if (auto) setAutoSubmitted(true);
    } catch (e) {
      alert('제출 중 오류 발생: ' + e.message);
    }
  };

  if (!started) {
    return (
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        fontFamily: 'sans-serif',
        padding: '2rem',
        backgroundColor: '#f5f7fa',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '2.2rem', marginBottom: '0.5rem' }}>📖 영어 읽기 시험</h1>
        <p style={{ marginBottom: '2rem', color: '#555' }}>
          아래 정보를 정확히 입력하고<br />‘시험 시작’ 버튼을 눌러주세요.
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
          <div style={{ textAlign: 'left', fontWeight: 'bold' }}>
            학년: <span style={{ marginLeft: '0.5rem' }}>{info.grade}</span>
          </div>

          <label style={{ textAlign: 'left' }}>
            반:
            <select
              value={info.class}
              onChange={e => setInfo({ ...info, class: e.target.value })}
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
            >
              <option value=''>선택</option>
              {[...Array(8)].map((_, i) => (
                <option key={i} value={`${i + 1}반`}>{`${i + 1}반`}</option>
              ))}
            </select>
          </label>

          <label style={{ textAlign: 'left' }}>
            번호:
            <input
              type="text"
              value={info.number}
              onChange={e => setInfo({ ...info, number: e.target.value })}
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
            />
          </label>

          <label style={{ textAlign: 'left' }}>
            이름:
            <input
              type="text"
              value={info.name}
              onChange={e => setInfo({ ...info, name: e.target.value })}
              style={{ width: '100%', padding: '0.5rem', marginTop: '0.25rem' }}
            />
          </label>

          <button
            onClick={() => setStarted(true)}
            style={{
              marginTop: '1rem',
              padding: '0.75rem',
              backgroundColor: '#007BFF',
              color: 'white',
              border: 'none',
              borderRadius: '8px',
              fontSize: '1rem',
              cursor: 'pointer'
            }}
          >
            시험 시작 / Start
          </button>
        </div>
      </div>
    );
  }

  if (submitted) {
    return (
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        {autoSubmitted ? (
          <h2>⏰ 시간이 종료되었습니다.<br />응답은 자동으로 저장되어 제출되었습니다.</h2>
        ) : (
          <h2>제출이 완료되었습니다. 감사합니다!</h2>
        )}
      </div>
    );
  }

  const current = passages[currentIndex];
  if (!current) return <div>Loading...</div>;

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
  <div style={{ display: 'flex', height: '100vh' }}>
    <div style={{ flex: 3, padding: '1rem', overflow: 'auto', touchAction: 'manipulation' }}>
      <h3 style={{ textAlign: 'center' }}>{current.title}</h3>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6', textAlign: 'left' }}
         dangerouslySetInnerHTML={{ __html: current.text }}
      ></p>
      <div style={{ marginTop: '1rem', textAlign: 'center' }}>
        <button disabled={currentIndex === 0} onClick={() => setCurrentIndex(currentIndex - 1)}>이전</button>
        <button disabled={currentIndex === passages.length - 1} onClick={() => setCurrentIndex(currentIndex + 1)} style={{ marginLeft: '1rem' }}>다음</button>
      </div>
      <div style={{ marginTop: '2rem', fontSize: '1rem', color: '#333', textAlign: 'center' }}>
        ⏰ 남은 시간: {minutes}:{seconds.toString().padStart(2, '0')}
      </div>
    </div>

    <div style={{ flex: 2, padding: '1rem', overflowY: 'auto', textAlign: 'left' }}>
      {current.questions.map((q, idx) => {
        const qid = `${current.id}_q${idx}`;
        return (
          <div key={idx} style={{ marginBottom: '1.5rem' }}>
            <div dangerouslySetInnerHTML={{ __html: `<strong>Q${idx + 1}.</strong> ${q.question}`}}></div>

            {q.choices.map((c, i) => (
              <div key={i}>
                <label>
                  <input
                    type="radio"
                    name={qid}
                    checked={responses[qid] === c.charAt(0).toLowerCase()}
                    onChange={() => handleSelect(qid, c.charAt(0).toLowerCase())}
                  /> {c}
                </label>
              </div>
            ))}
          </div>
        );
      })}

      {currentIndex === passages.length - 1 && (
        <div style={{ marginTop: '2rem', textAlign: 'center' }}>
          <button onClick={() => handleSubmit(false)}>제출 / Submit</button>
        </div>
      )}
    </div>
  </div>
);

}

export default App;
