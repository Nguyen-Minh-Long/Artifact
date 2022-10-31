import React from 'react';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.css';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../../index.css'

function importAll(r) {
    let images = {};
    r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
    return images;
  }

const imagesChar = importAll(require.context('../../ImagesCharacter/', false, /\.(png|jpe?g|svg)$/));
const imagesArts = importAll(require.context('../../ImagesArtifact/', false, /\.(png|jpe?g|svg)$/));

const Characters = {
  : {
    name: imagesChar['.png'].default,
    artifacts: {
      Flower: {
        type: "",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "",
        img: imagesArts['.png'].default
      },
      Plume: {
        type: "",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "",
        img: imagesArts['.png'].default
      },
      Sands: {
        type: "",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "",
        img: imagesArts['.png'].default
      },
      Goblet: {
        type: "",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "",
        img: imagesArts['.png'].default
      },
      Circlet: {
        type: "",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "",
        img: imagesArts['.png'].default
      }
    }
  },
};

function Cryo() {

  const [isActive, setIsActive] = useState();

  const CharactersValues = Object.values(Characters)

  const tbodies = CharactersValues.map((Characters, index) => {
    const ArtifactValues = Object.values(Characters.artifacts)
    const ArtifactRows = ArtifactValues.map((artifact, i) => {
      const CharactersName = i === 0 ? <td rowSpan={ArtifactValues.length + 1}>
        <img src={Characters.name} alt='Character' style={{ width: '350px', height: '350px' }} /></td> : null
      return (
        <tr key={i}>
          {CharactersName}
          <td><img src={artifact.img || ''} alt='' style={{ width: '50px', height: '50px' }} /><nobr>&ensp; {artifact.type}</nobr></td>
          <td style={{ paddingTop: "25px" }}>{artifact.name}</td>
          <CopyToClipboard text={artifact.command}>
            <td
              onClick={
                () => {
                  setIsActive(artifact.command);
                  toast.success('Copy Successful')
                }
              }
              style={isActive === artifact.command ? {
                color: "#00ff00",
                paddingTop: "25px"
              } : {paddingTop: "25px"}}
            >
              <p className="noselect">{artifact.command}</p></td>
          </CopyToClipboard>
        </tr>
      )
    })
    return (
      <tbody key={index} className={Characters.name}>
        {ArtifactRows}
      </tbody>
    )
  })

  return (
    <div>
      <p style={{ fontSize: 20 }}><b style={{ color: 'red' }}>*Note:</b> Click on the command you want to use will automatically copy to Clipboard</p>
      <Table striped bordered hover variant="dark" style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th colSpan="4" style={{ color: '#aff8f6' }}>❄️❄️❄️ Best of Artifact - Cryo ❄️❄️❄️</th>
          </tr>
          <tr>
            <th>Character</th>
            <th>Set</th>
            <th>Artifact</th>
            <th>Command</th>
          </tr>
        </thead>
        {tbodies}
      </Table>
      <ToastContainer
        autoClose={100}
      />
    </div>
  )
}

export default Cryo