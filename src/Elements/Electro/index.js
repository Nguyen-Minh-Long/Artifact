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
  Shogun: {
    name: imagesChar['Shogun.png'].default,
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
  Yae: {
    name: imagesChar['Yae.png'].default,
    artifacts: {
      Flower: {
        type: "Thundering Fury",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 79544 10001 501054 501064 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15005_4.png'].default
      },
      Plume: {
        type: "Thundering Fury",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 79524 10003 501244 501064 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15005_2.png'].default
      },
      Sands: {
        type: "Thundering Fury",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' style={{ width: '30%' }} />,
        command: "!g 79554 10004 501244 501054 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15005_5.png'].default
      },
      Goblet: {
        type: "Gladiator's Finale",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 75514 15009 501054 501064 501224 501204,6 lv20",
        img: imagesArts['UI_RelicIcon_15001_1.png'].default
      },
      Circlet: {
        type: "Gladiator's Finale",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' style={{ width: '48%' }} />,
        command: "!g 75534 13008 501054 501064 989001,2 501204,6 lv20",
        img: imagesArts['UI_RelicIcon_15001_3.png'].default
      }
    }
  },
  Keqing: {
    name: imagesChar['Keqing.png'].default,
    artifacts: {
      Flower: {
        type: "Thunder­soother",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 23444 10001 501054 501064 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_14002_4.png'].default
      },
      Plume: {
        type: "Thunder­soother",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 23442 10003 501064 501244 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_14002_2.png'].default
      },
      Sands: {
        type: "Thunder­soother",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' style={{ width: '30%' }} />,
        command: "!g 23445 10004 501054 501244 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_14002_5.png'].default
      },
      Goblet: {
        type: "Thunder­soother",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 23441 15009 501054 501064 501224 501204,6 lv20",
        img: imagesArts['UI_RelicIcon_14002_1.png'].default
      },
      Circlet: {
        type: "Thunder­soother",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' style={{ width: '48%' }} />,
        command: "!g 23443 13007 501054 501064 989001,2 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_14002_3.png'].default
      }
    }
  },
  Cyno: {
    name: imagesChar['Cyno.png'].default,
    artifacts: {
      Flower: {
        type: "Thundering Fury",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 79544 10001 501244 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15005_4.png'].default
      },
      Plume: {
        type: "Thundering Fury",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 79524 10003 501244 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15005_2.png'].default
      },
      Sands: {
        type: "Thundering Fury",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "!g 79554 10008 501054 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15005_5.png'].default
      },
      Goblet: {
        type: "Thundering Fury",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 79514 15009 501244 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15005_1.png'].default
      },
      Circlet: {
        type: "Thundering Fury",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "!g 79534 13008 501244 501064 989001,2 501204,6 lv20",
        img: imagesArts['UI_RelicIcon_15005_3.png'].default
      }
    }
  },
  Sara: {
    name: imagesChar['Sara.png'].default,
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
        command: "!g 24801 10004 501064 501234 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15020_1.png'].default
      },
      Circlet: {
        type: "Emblem of Severed Fate",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' style={{ width: '48%' }} />,
        command: "!g 24803 13008 501234 501064 989001,2 501204,6 lv20",
        img: imagesArts['UI_RelicIcon_15020_3.png'].default
      }
    }
  },
};

function Electro() {

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
      <video src={videoBG['Electro.mp4'].default} autoPlay loop  muted/>
      <Table striped bordered hover variant="dark" style={{ backgroundColor: "transparent" }}>
        <thead>
          <tr>
            <th colSpan="4" style={{ color: '#a654de' }}>⚡️⚡️⚡️ Best of Artifact - Electro ⚡️⚡️⚡️</th>
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

export default Electro