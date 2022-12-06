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
const videoBG = importAll(require.context('../../VideoBG', false, /\.(mp4|mkv)$/));

const Characters = {
  Yoimiya: {
    name: imagesChar['Yoimiya.png'].default,
    artifacts: {
      Flower: {
        type: "Shimenawa's Reminiscence",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 24194 10001 501054 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15019_4.png'].default
      },
      Plume: {
        type: "Shimenawa's Reminiscence",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 24192 10003 501244 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15019_2.png'].default
      },
      Sands: {
        type: "Shimenawa's Reminiscence",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "!g 24195 10004 501244 501054 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15019_5.png'].default
      },
      Goblet: {
        type: "Shimenawa's Reminiscence",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 24191 15008 501054 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15019_1.png'].default
      },
      Circlet: {
        type: "Shimenawa's Reminiscence",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "!g 24193 13008 501054 501064 989001,2 501204,6 lv20",
        img: imagesArts['UI_RelicIcon_15019_3.png'].default
      }
    }
  },
  Hutao: {
    name: imagesChar['Hutao.png'].default,
    artifacts: {
      Flower: {
        type: "Crimson Witch of Flames",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 80544 10001 501034 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15006_4.png'].default
      },
      Plume: {
        type: "Crimson Witch of Flames",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 80524 10003 501034 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15006_2.png'].default
      },
      Sands: {
        type: "Crimson Witch of Flames",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "!g 80554 10002 501244 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15006_5.png'].default
      },
      Goblet: {
        type: "Crimson Witch of Flames",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 80514 15008 501034 501064 501204,6 501224 lv20",
        img: imagesArts['UI_RelicIcon_15006_1.png'].default
      },
      Circlet: {
        type: "Crimson Witch of Flames",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "!g 80534 13007 501034 501064 989001,2 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15006_3.png'].default
      }
    }
  },
  Klee: {
    name: imagesChar['Klee.png'].default,
    artifacts: {
      Flower: {
        type: "Crimson Witch of Flames",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 80544 10001 501054 501064 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15006_4.png'].default
      },
      Plume: {
        type: "Crimson Witch of Flames",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 80524 10003 501244 501064 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15006_2.png'].default
      },
      Sands: {
        type: "Crimson Witch of Flames",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "!g 80554 10004 501244 501054 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15006_5.png'].default
      },
      Goblet: {
        type: "Crimson Witch of Flames",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 80514 15008 501054 501064 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15006_1.png'].default
      },
      Circlet: {
        type: "Crimson Witch of Flames",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "!g 80534 13008 501054 501064 989001,2 501204,6 lv20",
        img: imagesArts['UI_RelicIcon_15006_3.png'].default
      }
    }
  },
  Diluc: {
    name: imagesChar['Diluc.png'].default,
    artifacts: {
      Flower: {
        type: "Crimson Witch of Flames",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 80544 10001 501054 501064 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15006_4.png'].default
      },
      Plume: {
        type: "Crimson Witch of Flames",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 80524 10003 501244 501064 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15006_2.png'].default
      },
      Sands: {
        type: "Crimson Witch of Flames",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "!g 80554 10004 501244 501054 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15006_5.png'].default
      },
      Goblet: {
        type: "Crimson Witch of Flames",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 80514 15008 501054 501064 501224 501204,6 lv20",
        img: imagesArts['UI_RelicIcon_15006_1.png'].default
      },
      Circlet: {
        type: "Crimson Witch of Flames",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "!g 80534 13008 501054 501064 989001,2 501204,6 lv20",
        img: imagesArts['UI_RelicIcon_15006_3.png'].default
      }
    }
  },
  Bennett: {
    name: imagesChar['Bennett.png'].default,
    artifacts: {
      Flower: {
        type: "Noblesse Oblige",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 81544 10001 501034,6 501094 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15007_4.png'].default
      },
      Plume: {
        type: "Noblesse Oblige",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 81524 10003 501034,6 501094 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15007_2.png'].default
      },
      Sands: {
        type: "Noblesse Oblige",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "!g 81554 10002 501024,6 501094 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15007_5.png'].default
      },
      Goblet: {
        type: "Noblesse Oblige",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 81514 10002 501024,6 501094 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15007_1.png'].default
      },
      Circlet: {
        type: "Noblesse Oblige",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "!g 81534 13009 501034,6 501094 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15007_3.png'].default
      }
    }
  },
  Xiangling: {
    name: imagesChar['Xiangling.png'].default,
    artifacts: {
      Flower: {
        type: "Emblem of Severed Fate",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 24804 10001 501064 501234 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15020_4.png'].default
      },
      Plume: {
        type: "Emblem of Severed Fate",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 24802 10003 501064 501234 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15020_2.png'].default
      },
      Sands: {
        type: "Emblem of Severed Fate",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' style={{ width: '30%' }} />,
        command: "!g 24805 10007 501054 501064 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15020_5.png'].default
      },
      Goblet: {
        type: "Emblem of Severed Fate",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 24801 10004 501064 501234 501224 501204,6 lv20",
        img: imagesArts['UI_RelicIcon_15020_1.png'].default
      },
      Circlet: {
        type: "Emblem of Severed Fate",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' style={{ width: '48%' }} />,
        command: "!g 24803 13007 501234 501064 989001,2 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15020_3.png'].default
      }
    }
  },
};

function Pyro() {

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
              } : { paddingTop: "25px" }}
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
      <video src={videoBG['Pyro.mp4'].default} autoPlay loop  muted/>
      <Table striped bordered hover variant="dark" style={{ backgroundColor: "transparent" }}>
        <thead>
          <tr>
            <th colSpan="4" style={{ color: '#eea271' }}>🔥🔥🔥 Best of Artifact - Pyro 🔥🔥🔥</th>
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

export default Pyro