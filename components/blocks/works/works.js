import styles from './works.module.scss'
import Container from "@/components/container/container";
import {useEffect, useState} from "react";
import {fetchApi} from "../../../services";
import WorkBox from "@/components/work-box/work-box";

export const Works = ({ title }) => {
  const [works, setWorks] = useState([])

  useEffect(() => {
    fetchApi('works?populate=*')
      .then((res)=> {
        setWorks(res)
      })
  }, [])

  return (
    <div className={styles.works}>
      <Container>
        {title && (
          <h2 className="text-center">{title}</h2>
        )}

        {works && (
          <div className="grid">
            {
              works?.map((work) =>
                <div key={work.id} className="grid__column col-6-12">
                  <WorkBox {...work.attributes} />
                </div>
              )
            }
          </div>
        )}
      </Container>
    </div>
  );
};
