import styles from './skills.module.scss'
import Container from "@/components/container/container";
import SkillBox from "@/components/skill-box/skill-box";

export const Skills = ({ title, image_card }) => {
  return (
    <div className={styles.skills}>
      <Container>
        {title && (
          <h2 className="text-center">{title}</h2>
        )}

        {image_card && (
          <div className="grid">
            {
              image_card?.map((skillBox) =>
                <div key={skillBox.id} className="grid__column col-3-12">
                  <SkillBox {...skillBox} />
                </div>
              )
            }
          </div>
        )}
      </Container>
    </div>
  );
};
