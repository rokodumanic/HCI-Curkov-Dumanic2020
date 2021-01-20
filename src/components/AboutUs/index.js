import React from "react"
import style from "./style.module.css"

const IndexPage = props => {
  return (
    <div className={style.mainContainer}>
      {props.children}
      <div className={style.container}>
        <img className={style.picture} />
        <section className={style.text}>
          <p>
            Eu voluptate eu pariatur sint nisi minim cupidatat nisi dolor est.
            Officia magna dolore reprehenderit nulla eiusmod adipisicing velit
            labore consectetur aliquip. Mollit enim tempor dolor magna eu.
          </p>
          <p>
            Id magna magna mollit ipsum. Enim sint fugiat proident voluptate
            incididunt commodo Lorem occaecat labore laborum commodo tempor
            adipisicing. Et officia nostrud et ut et culpa non anim occaecat ex
            qui pariatur voluptate do. Cupidatat nisi et cillum voluptate anim.
          </p>
          <p>
            Non non aliquip mollit dolor. Voluptate laborum est ut quis
            deserunt. Ut nostrud ullamco officia cillum est aute aliqua quis
            commodo commodo quis. Irure commodo amet eiusmod pariatur elit
            consequat commodo mollit nulla aute deserunt eu ipsum. Mollit sint
            Lorem ut veniam officia commodo laborum nulla. Magna enim et esse
            sint.
          </p>
          <p>
            Est fugiat magna irure id eu in nostrud officia non magna ex fugiat.
            Officia consequat id quis aute proident fugiat anim nisi ut sit
            minim mollit. Magna reprehenderit velit nostrud non mollit ea velit
            id amet deserunt consectetur velit. Nulla non aliqua non aute aliqua
            cillum. Velit amet velit nisi laborum eu cillum eu quis laboris
            irure. Anim magna ipsum ut elit ea.
          </p>
          <p>
            Adipisicing consequat deserunt nulla amet voluptate sit ipsum.
            Dolore in enim laboris ex aliquip aliquip proident ea proident esse
            sunt culpa. Dolore nisi est Lorem ullamco in eu.
          </p>
          <p>
            Quis eiusmod tempor adipisicing officia incididunt officia enim eu.
            Aliqua velit id cillum deserunt ea deserunt eu deserunt. Eiusmod
            minim id ex est aliqua cillum. Occaecat culpa irure et aute ut aute
            cillum ullamco consectetur duis. Veniam amet ex ut ipsum amet
            nostrud magna reprehenderit. Exercitation et qui esse aliqua anim.
            Fugiat est adipisicing sit dolore commodo consequat eu.
          </p>
        </section>
      </div>
    </div>
  )
}

export default IndexPage
