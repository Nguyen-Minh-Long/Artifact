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
  Tighnari: {
    name: imagesChar['Tighnari.png'].default,
    artifacts: {
      Flower: {
        type: "Deepwood Memories",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 20544 10001 501244 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15025_4.png'].default
      },
      Plume: {
        type: "Deepwood Memories",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 20524 10003 501244 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15025_2.png'].default
      },
      Sands: {
        type: "Deepwood Memories",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "!g 20554 10004 501244 501054 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15025_5.png'].default
      },
      Goblet: {
        type: "Deepwood Memories",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 20514 15014 501244 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15025_1.png'].default
      },
      Circlet: {
        type: "Deepwood Memories",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "!g 20534 13008 501244 501064 989001,2 501204,6 lv20",
        img: imagesArts['UI_RelicIcon_15025_3.png'].default
      }
    }
  },
  Collei: {
    name: imagesChar['Collei.png'].default,
    artifacts: {
      Flower: {
        type: "Deepwood Memories",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 20544 10001 501244 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15025_4.png'].default
      },
      Plume: {
        type: "Deepwood Memories",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 20524 10003 501244 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15025_2.png'].default
      },
      Sands: {
        type: "Deepwood Memories",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "!g 20554 10004 501244 501054 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15025_5.png'].default
      },
      Goblet: {
        type: "Deepwood Memories",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 20514 15014 501244 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15025_1.png'].default
      },
      Circlet: {
        type: "Deepwood Memories",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "!g 20534 13008 501244 501064 989001,2 501204,6 lv20",
        img: imagesArts['UI_RelicIcon_15025_3.png'].default
      }
    }
  },
  Nahida: {
    name: imagesChar['Nahida.png'].default,
    artifacts: {
      Flower: {
        type: "Gilded Dreams",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 21544 10001 501244,6 501064 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15026_4.png'].default
      },
      Plume: {
        type: "Gilded Dreams",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 21524 10003 501244,6 501064 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15026_2.png'].default
      },
      Sands: {
        type: "Gilded Dreams",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' style={{ width: '30%' }} />,
        command: "!g 21554 10008 501054 501064 501204,6 501224 lv20",
        img: imagesArts['UI_RelicIcon_15026_5.png'].default
      },
      Goblet: {
        type: "Gilded Dreams",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 21514 15014 501244,6 501064 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15026_1.png'].default
      },
      Circlet: {
        type: "Gilded Dreams",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' style={{ width: '48%' }} />,
        command: "!g 21534 10008 501054 501064 501204,6 989001,2 lv20",
        img: imagesArts['UI_RelicIcon_15026_3.png'].default
      }
    }
  },
};

function Dendro() {

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
          <th colSpan="4" style={{ color: '#38a782' }}>🍀🍀🍀 Best of Artifact - Dendro 🍀🍀🍀</th>
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

export default Dendro