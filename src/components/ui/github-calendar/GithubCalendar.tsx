import { GitHubCalendar } from "react-github-calendar";
import '@/shared/styles/_variables.scss'

export default function GithubCalendar() {
  return (
    <GitHubCalendar
      username="TopolskiiDaniil"
      blockSize={30}
      blockMargin={10}
      fontSize={20}
    />
  )
}