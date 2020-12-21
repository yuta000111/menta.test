const target = document.getElementById('app');
const start = document.getElementById('start');
const questions = [];

class Quiz {
    constructor() {
        this.questionNumber = 0
        this.correctAnswerNumber = 0
    }
    done() {

        target.innerHTML = ''
        const h1 = document.createElement('h1')
        const status = document.createElement('p')
        const btn = document.createElement('button')
        const link = document.createElement('a')

        h1.textContent = 'あなたの正解数は' + this.correctAnswerNumber + 'です。'
        status.textContent = '再度チャレンジしたい場合は以下をクリック'
        link.href = './index.html'
        link.textContent = 'ホームに戻る'
        target.appendChild(h1)
        target.appendChild(status)
        btn.appendChild(link)
        target.appendChild(btn)

        btn.addEventListener('click', () => {

        })
    }

    Question() {
        if (this.questionNumber >= 10) {
            this.done()
        } else {


            target.innerHTML = ''

            //問題を取得
            const q = questions[this.questionNumber]

            //各DOM要素の作成
            const h1 = document.createElement('h1')
            const genre = document.createElement('h3')
            const difficulty = document.createElement('h3')
            const question = document.createElement('p')

            //DOMに各テキストを格納
            h1.textContent = '問題' + (Number(this.questionNumber) + 1)
            genre.textContent = '[ジャンル]' + q.category
            difficulty.textContent = '[難易度]' + q.difficulty
            question.textContent = q.question

            //答えのリストを得る
            const answerList = q.incorrect_answers
            const correctAnswer = q.correct_answer

            //正解の位置をランダムにする
            const randomNumber = Math.floor(Math.random() * answerList.length)
            answerList.splice(randomNumber, 0, correctAnswer)

            //そのままForEachすると要素を生成する舞にDOMを追加するためパフォーマンスがよくない。なのでDocumentFragmentを利用
            const fragment = document.createDocumentFragment()

            answerList.forEach((item, index) => {
                const answer = document.createElement('button')
                answer.id = 'answer'
                answer.value = index
                answer.style.display = 'block'
                answer.style.marginBottom = '10px'
                answer.textContent = item

                answer.addEventListener('click', event => {
                    if (event.target.textContent === correctAnswer) {
                        this.correctAnswerNumber++;
                    }
                    this.Question()
                })
                fragment.appendChild(answer)
            })

            //各DOMをtargetに追加
            target.appendChild(h1)
            target.appendChild(genre)
            target.appendChild(difficulty)
            target.appendChild(question)
            target.appendChild(fragment)

            //問題番号を更新
            this.questionNumber++;
        }
    }

    initial() {
        //読み込み画面の表示
        target.innerHTML = ''
        const h1 = document.createElement('h1')
        const status = document.createElement('p')

        h1.textContent = '読み込み中'
        status.textContent = '少々お待ち下さい'

        target.appendChild(h1)
        target.appendChild(status)

    }
    fetchApi() {
        fetch('https://opentdb.com/api.php?amount=10')
            .then(responce => {
                this.initial()
                return responce.json()
            })
            .then(data => {
                Object.keys(data.results).forEach(key => {
                    questions.push(data.results[key])
                })
            })
            .then(() => {
                this.Question.apply(this)
            })
    }
}


start.addEventListener('click', () => {
    let quiz = new Quiz()
    quiz.fetchApi()
})