import { Tweet } from '../components/Tweet';
import { Header } from '../components/Header';
import { Separator } from '../components/Separator';

const tweets = [
  'Meu primeiro tweet',
  'Teste',
  'Deu certo tweetar!'
]

import './Timeline.css';

export function Timeline() {
  return (
    <main className="timeline">
      <Header title="Home" />

      <form className="new-tweet-form">
        <label htmlFor="tweet">
          <img src="https://github.com/madalena-rocha.png" alt="Madalena Rocha" />
          <textarea id="tweet" placeholder="What's happening?" />
        </label>

        <button type="submit">Tweet</button>
      </form>

      <Separator />

      {tweets.map(tweet => {
        return <Tweet key={tweet} content={tweet} />
      })}
    </main>
  )
}