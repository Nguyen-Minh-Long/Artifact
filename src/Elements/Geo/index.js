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
  Zhongli: {
    name: imagesChar['Zhongli.png'].default,
    artifacts: {
      Flower: {
        type: "Tenacity of the Millelith",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 24224 10001 501034 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15017_4.png'].default
      },
      Plume: {
        type: "Tenacity of the Millelith",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 24222 10003 501034 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15017_2.png'].default
      },
      Sands: {
        type: "Tenacity of the Millelith",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "!g 24225 10002 501054 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15017_5.png'].default
      },
      Goblet: {
        type: "Tenacity of the Millelith",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 24221 15013 501034 501064 501204,6 501224 lv20",
        img: imagesArts['UI_RelicIcon_15017_1.png'].default
      },
      Circlet: {
        type: "Tenacity of the Millelith",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "!g 24223 13007 501034 501064 989001,2 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15017_3.png'].default
      }
    }
  },
  Itto: {
    name: imagesChar['Itto.png'].default,
    artifacts: {
      Flower: {
        type: "Husk of Opulent Dreams",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 24824 10001 501064 501094 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15021_4.png'].default
      },
      Plume: {
        type: "Husk of Opulent Dreams",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 24822 10003 501064 501094 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15021_2.png'].default
      },
      Sands: {
        type: "Husk of Opulent Dreams",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "!g 24825 10006 501084 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15021_5.png'].default
      },
      Goblet: {
        type: "Husk of Opulent Dreams",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 24821 15013 501094 501064 501204,6 501224 lv20",
        img: imagesArts['UI_RelicIcon_15021_1.png'].default
      },
      Circlet: {
        type: "Husk of Opulent Dreams",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "!g 24823 13008 501094 501064 501204,6 989001,2 lv20",
        img: imagesArts['UI_RelicIcon_15021_3.png'].default
      }
    }
  },
  Albedo: {
    name: imagesChar['Albedo.png'].default,
    artifacts: {
      Flower: {
        type: "Husk of Opulent Dreams",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 24824 10001 501064 501094 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15021_4.png'].default
      },
      Plume: {
        type: "Husk of Opulent Dreams",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 24822 10003 501064 501094 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15021_2.png'].default
      },
      Sands: {
        type: "Husk of Opulent Dreams",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "!g 24825 10006 501084 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15021_5.png'].default
      },
      Goblet: {
        type: "Husk of Opulent Dreams",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 24821 15013 501094 501064 501204,6 501224 lv20",
        img: imagesArts['UI_RelicIcon_15021_1.png'].default
      },
      Circlet: {
        type: "Husk of Opulent Dreams",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "!g 24823 13007 501094 501064 501224,6 989001,2 lv20",
        img: imagesArts['UI_RelicIcon_15021_3.png'].default
      }
    }
  },  
  Yunjin: {
    name: imagesChar['Yunjin.png'].default,
    artifacts: {
      Flower: {
        type: "Husk of Opulent Dreams",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 24824 10001 501084 501094,6 501224 501204 lv20",
        img: imagesArts['UI_RelicIcon_15021_4.png'].default
      },
      Plume: {
        type: "Husk of Opulent Dreams",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 24822 10003 501084 501094,6 501224 501204 lv20",
        img: imagesArts['UI_RelicIcon_15021_2.png'].default
      },
      Sands: {
        type: "Husk of Opulent Dreams",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "!g 24825 10006 501084,6 501064 501224 501204 lv20",
        img: imagesArts['UI_RelicIcon_15021_5.png'].default
      },
      Goblet: {
        type: "Husk of Opulent Dreams",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 24821 10006 501084,6 501064 501224 501204 lv20",
        img: imagesArts['UI_RelicIcon_15021_1.png'].default
      },
      Circlet: {
        type: "Husk of Opulent Dreams",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "!g 24823 10006 501084,6 501064 501224 501204 lv20",
        img: imagesArts['UI_RelicIcon_15021_3.png'].default
      }
    }
  },
  Ningguang: {
    name: imagesChar['Ningguang.png'].default,
    artifacts: {
      Flower: {
        type: "Archaic Petra",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 88544 10001 501054 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15014_4.png'].default
      },
      Plume: {
        type: "Archaic Petra",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 88524 10003 501234 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15014_2.png'].default
      },
      Sands: {
        type: "Archaic Petra",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "!g 88554 10004 501234 501054 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15014_5.png'].default
      },
      Goblet: {
        type: "Gladiator's Finale",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 75514 15013 501054 501064 501204,6 501224 lv20",
        img: imagesArts['UI_RelicIcon_15001_1.png'].default
      },
      Circlet: {
        type: "Gladiator's Finale",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "!g 75534 13007 501054 501064 989001,2 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15001_3.png'].default
      }
    }
  },
};

function Geo() {

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
          <th colSpan="4" style={{ color: '#ddb41f' }}>🌕🌕🌕 Best of Artifact - Geo 🌕🌕🌕</th>
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

export default Geo