import { Header } from "../components/Header";
import { Separator } from "../components/Separator";
import { Tweet } from "../components/Tweet";

import './Status.css';

const answers = [
  'Concordo...',
  'Olha, faz sentido!',
  'Parabéns pelo progresso.'
]

export function Status() {
  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate ducimus itaque, inventore non quibusdam voluptates deleniti explicabo eaque sit dolorem vitae error eligendi dignissimos ipsum eum officiis. Harum, labore pariatur." />

      <Separator />

      <form className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/madalena-rocha.png" alt="Madalena Rocha" />
          <textarea id="tweet" placeholder="Tweet your answer" />
        </label>

        <button type="submit">Answer</button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}