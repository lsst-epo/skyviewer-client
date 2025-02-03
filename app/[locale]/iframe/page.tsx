import { FunctionComponent } from "react";
import styles from "./styles.module.css";
import Buttonish from "@rubin-epo/epo-react-lib/Buttonish";

const IframePage: FunctionComponent = () => {
  return (
    <article className={styles["page-container"]}>
      <h1>Breaking News Out of Rubin Observatory</h1>
      <h3>New Image Stuns World</h3>
      <time>August 19, 2024</time>
      <section className={styles["flow-content"]}>
        <p>
          Imagine me as a news article but with a Skyviewer image embedded in
          the middle. What would that look like? Can you imagine it?
        </p>
        <p>
          Alice was beginning to get very tired of sitting by her sister on the
          bank, and of having nothing to do: once or twice she had peeped into
          the book her sister was reading, but it had no pictures or
          conversations in it, “and what is the use of a book,” thought Alice
          “without pictures or conversations?”
        </p>
        <iframe
          src="/embed/test-embedded-view"
          className={styles["embedded-frame"]}
        />
        <Buttonish url={"/"} text="Visit the Skyviewer" isBlock />
        <p>
          So she was considering in her own mind (as well as she could, for the
          hot day made her feel very sleepy and stupid), whether the pleasure of
          making a daisy-chain would be worth the trouble of getting up and
          picking the daisies, when suddenly a White Rabbit with pink eyes ran
          close by her.
        </p>
        <p>
          There was nothing so very remarkable in that; nor did Alice think it
          so very much out of the way to hear the Rabbit say to itself, “Oh
          dear! Oh dear! I shall be late!” (when she thought it over afterwards,
          it occurred to her that she ought to have wondered at this, but at the
          time it all seemed quite natural); but when the Rabbit actually took a
          watch out of its waistcoat-pocket, and looked at it, and then hurried
          on, Alice started to her feet, for it flashed across her mind that she
          had never before seen a rabbit with either a waistcoat-pocket, or a
          watch to take out of it, and burning with curiosity, she ran across
          the field after it, and fortunately was just in time to see it pop
          down a large rabbit-hole under the hedge.
        </p>
      </section>
    </article>
  );
};

export default IframePage;
