import styles from "./gallery-section.module.scss";
import Image from "next/image";

export default function GallerySection() {
  return (
    <div className={styles.gallery_section}>
      <h1>In life of a Grandmaster :)</h1>

      {new Array(30).fill("").map((i, index) => {
        return (
          <Image
            src={`/ani_famous/${index}.jpg`}
            className={styles.picture}
            width="100"
            height="100"
          />
        );
      })}
    </div>
  );
}
