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
  Ganyu: {
    name: imagesChar['Ganyu.png'].default,
    artifacts: {
      Flower: {
        type: "Wanderer's Troupe",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 77544 10001 501054 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15003_4.png'].default
      },
      Plume: {
        type: "Wanderer's Troupe",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 77524 10003 501244 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15003_2.png'].default
      },
      Sands: {
        type: "Wanderer's Troupe",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "!g 77554 10004 501244 501054 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15003_5.png'].default
      },
      Goblet: {
        type: "Wanderer's Troupe",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 77514 15010 501054 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15003_1.png'].default
      },
      Circlet: {
        type: "Wanderer's Troupe",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "!g 77534 13008 501054 501064 989001,2 501204,6 lv20",
        img: imagesArts['UI_RelicIcon_15003_3.png'].default
      }
    }
  },
  Ayaka: {
    name: imagesChar['Ayaka.png'].default,
    artifacts: {
      Flower: {
        type: "Blizzard Strayer",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 71544 10001 501054 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_14001_4.png'].default
      },
      Plume: {
        type: "Blizzard Strayer",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 71524 10003 501244 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_14001_2.png'].default
      },
      Sands: {
        type: "Blizzard Strayer",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "!g 71554 10004 501244 501054 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_14001_5.png'].default
      },
      Goblet: {
        type: "Blizzard Strayer",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 71514 15010 501054 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_14001_1.png'].default
      },
      Circlet: {
        type: "Blizzard Strayer",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "!g 71534 13008 501054 501064 989001,2 501204,6 lv20",
        img: imagesArts['UI_RelicIcon_14001_3.png'].default
      }
    }
  },
  Shenhe: {
    name: imagesChar['Shenhe.png'].default,
    artifacts: {
      Flower: {
        type: "Shimenawa's Reminiscence",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 24194 10001 501054 501064,6 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15019_4.png'].default
      },
      Plume: {
        type: "Shimenawa's Reminiscence",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 24192 10003 501244 501064,6 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15019_2.png'].default
      },
      Sands: {
        type: "Gladiator's Finale",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "!g 75554 10004 501054,6 501244 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15001_5.png'].default
      },
      Goblet: {
        type: "Gladiator's Finale",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 75514 10004 501054,6 501244 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15001_1.png'].default
      },
      Circlet: {
        type: "Gladiator's Finale",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "!g 75534 10004 501054,6 989001,2 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15001_3.png'].default
      }
    }
  },
  Eula: {
    name: imagesChar['Eula.png'].default,
    artifacts: {
      Flower: {
        type: "Pale Flame",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 92544 10001 501054 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15018_4.png'].default
      },
      Plume: {
        type: "Pale Flame",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 92524 10003 501244 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15018_2.png'].default
      },
      Sands: {
        type: "Pale Flame",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "!g 92554 10004 501244 501054 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15018_5.png'].default
      },
      Goblet: {
        type: "Pale Flame",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 92514 15015 501054 501064 501204,6 501224 lv20",
        img: imagesArts['UI_RelicIcon_15018_1.png'].default
      },
      Circlet: {
        type: "Pale Flame",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "!g 92534 13008 501054 501064 989001,2 501204,6 lv20",
        img: imagesArts['UI_RelicIcon_15018_3.png'].default
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