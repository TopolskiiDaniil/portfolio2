import Link from "next/link";
import styles from "./sourceCodeButton.module.scss";
import { RxEyeOpen, RxGithubLogo } from "react-icons/rx";

export default function SourceCodeButton() {
  return (
    <Link
      href="https://github.com/TopolskiiDaniil/portfolio2"
      className={styles.scbutton}
      type="button"
      target="_blank">
      <RxEyeOpen /><RxGithubLogo />
    </Link>
  )
}