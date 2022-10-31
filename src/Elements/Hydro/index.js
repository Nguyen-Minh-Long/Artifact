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
  Yelan: {
    name: imagesChar['Yelan.png'].default,
    artifacts: {
      Flower: {
        type: "Heart of Depth",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 90544 10001 501244 501034 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15016_4.png'].default
      },
      Plume: {
        type: "Heart of Depth",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 90524 10003 501024 501034 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15016_2.png'].default
      },
      Sands: {
        type: "Heart of Depth",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' style={{ width: '30%' }} />,
        command: "!g 90554 10002 501024 501244 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15016_5.png'].default
      },
      Goblet: {
        type: "Tenacity of the Millelith",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 24221 15011 501024 501034 501224 501204,6 lv20",
        img: imagesArts['UI_RelicIcon_15017_1.png'].default
      },
      Circlet: {
        type: "Tenacity of the Millelith",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' style={{ width: '48%' }} />,
        command: "!g 24223 13008 501024 501034 989001,2 501204,6 lv20",
        img: imagesArts['UI_RelicIcon_15017_3.png'].default
      }
    }
  },
  Nilou: {
    name: imagesChar['Nilou.png'].default,
    artifacts: {
      Flower: {
        type: "Gilded Dreams",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 21544 10001 501244 501034,6 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15026_4.png'].default
      },
      Plume: {
        type: "Gilded Dreams",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 21524 10003 501244 501034,6 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15026_2.png'].default
      },
      Sands: {
        type: "Tenacity of the Millelith",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' style={{ width: '30%' }} />,
        command: "!g 24225 10002 501244,6 501024 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15017_5.png'].default
      },
      Goblet: {
        type: "Tenacity of the Millelith",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 24221 10002 501244,6 501024 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15017_1.png'].default
      },
      Circlet: {
        type: "Tenacity of the Millelith",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' style={{ width: '48%' }} />,
        command: "!g 24223 10002 501244,6 501024 501204 989001,2 lv20",
        img: imagesArts['UI_RelicIcon_15017_3.png'].default
      }
    }
  },
  Kokomi: {
    name: imagesChar['Kokomi.png'].default,
    artifacts: {
      Flower: {
        type: "Ocean-Hued Clam",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 96544 10001 501034,6 501094 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15022_4.png'].default
      },
      Plume: {
        type: "Ocean-Hued Clam",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 96524 10003 501034,6 501094 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15022_2.png'].default
      },
      Sands: {
        type: "Ocean-Hued Clam",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' style={{ width: '30%' }} />,
        command: "!g 96554 10002 501024,6 501094 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15022_5.png'].default
      },
      Goblet: {
        type: "Ocean-Hued Clam",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 96514 10002 501024,6 501094 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15022_1.png'].default
      },
      Circlet: {
        type: "Ocean-Hued Clam",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' style={{ width: '48%' }} />,
        command: "!g 96534 13009 501034,6 989001,2 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15022_3.png'].default
      }
    }
  },
  Ayato: {
    name: imagesChar['Ayato.png'].default,
    artifacts: {
      Flower: {
        type: "Echoes of an Offering",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 23614 10001 501054 501064 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15024_4.png'].default
      },
      Plume: {
        type: "Echoes of an Offering",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 23612 10003 501244 501064 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15024_2.png'].default
      },
      Sands: {
        type: "Echoes of an Offering",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' style={{ width: '30%' }} />,
        command: "!g 23615 10004 501244 501054 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15024_5.png'].default
      },
      Goblet: {
        type: "Echoes of an Offering",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 23611 15011 501054 501064 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15024_1.png'].default
      },
      Circlet: {
        type: "Echoes of an Offering",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' style={{ width: '48%' }} />,
        command: "!g 23613 13008 501054 501064 989001,2 501204,6 lv20",
        img: imagesArts['UI_RelicIcon_15024_3.png'].default
      }
    }
  },
  Childe: {
    name: imagesChar['Childe.png'].default,
    artifacts: {
      Flower: {
        type: "Heart of Depth",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 90544 10001 501054 501064 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15016_4.png'].default
      },
      Plume: {
        type: "Heart of Depth",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 90524 10003 501244 501064 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15016_2.png'].default
      },
      Sands: {
        type: "Heart of Depth",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' style={{ width: '30%' }} />,
        command: "!g 90554 10004 501244 501054 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15016_5.png'].default
      },
      Goblet: {
        type: "Heart of Depth",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 90514 15011 501054 501064 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15016_1.png'].default
      },
      Circlet: {
        type: "Heart of Depth",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' style={{ width: '48%' }} />,
        command: "!g 90534 13008 501054 501064 989001,2 501204,6 lv20",
        img: imagesArts['UI_RelicIcon_15016_3.png'].default
      }
    }
  },
  Xingqiu: {
    name: imagesChar['Xingqiu.png'].default,
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
  Barbara: {
    name: imagesChar['Barbara.png'].default,
    artifacts: {
      Flower: {
        type: "Maiden Beloved",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 23424 10001 501034,6 501094 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_14004_4.png'].default
      },
      Plume: {
        type: "Maiden Beloved",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 23422 10003 501034,6 501094 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_14004_2.png'].default
      },
      Sands: {
        type: "Maiden Beloved",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "!g 23425 10002 501024,6 501094 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_14004_5.png'].default
      },
      Goblet: {
        type: "Maiden Beloved",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 23421 10002 501024,6 501094 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_14004_1.png'].default
      },
      Circlet: {
        type: "Maiden Beloved",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "!g 23423 13009 501034,6 501094 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_14004_3.png'].default
      }
    }
  }
};

function Hydro() {

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
      <p style={{ fontSize: 20 }}><b style={{ color: 'red' }}>*Note:</b> Click on the command you want to use will automatically copy to Clipboard</p>
      <Table striped bordered hover variant="dark" style={{ textAlign: "center" }}>
        <thead>
          <tr>
            <th colSpan="4" style={{ color: '#06dcee' }}>💧💧💧 Best of Artifact - Hydro 💧💧💧</th>
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

export default Hydro