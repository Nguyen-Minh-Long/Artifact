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
  Xiao: {
    name: imagesChar['Xiao.png'].default,
    artifacts: {
      Flower: {
        type: "Vermillion Hereafter",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 97544 10001 501054 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15023_4.png'].default
      },
      Plume: {
        type: "Vermillion Hereafter",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 97524 10003 501244 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15023_2.png'].default
      },
      Sands: {
        type: "Vermillion Hereafter",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "!g 97554 10004 501244 501054 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15023_5.png'].default
      },
      Goblet: {
        type: "Vermillion Hereafter",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 97514 15012 501054 501064 501204 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15023_1.png'].default
      },
      Circlet: {
        type: "Vermillion Hereafter",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "!g 97534 13008 501054 501064 501204,6 989001,2 lv20",
        img: imagesArts['UI_RelicIcon_15023_3.png'].default
      }
    }
  },
  Venti: {
    name: imagesChar['Venti.png'].default,
    artifacts: {
      Flower: {
        type: "Viridescent Venerer",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 24654 10001 501054 501064 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15002_4.png'].default
      },
      Plume: {
        type: "Viridescent Venerer",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 24652 10003 501244 501064 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15002_2.png'].default
      },
      Sands: {
        type: "Viridescent Venerer",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "!g 24655 10004 501244 501054 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15002_5.png'].default
      },
      Goblet: {
        type: "Viridescent Venerer",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 24651 15012 501054 501064 501224 501204,6 lv20",
        img: imagesArts['UI_RelicIcon_15002_1.png'].default
      },
      Circlet: {
        type: "Viridescent Venerer",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "!g 24653 13007 501054 501064 989001,2 501224,6 lv20",
        img: imagesArts['UI_RelicIcon_15002_3.png'].default
      }
    }
  },
  Jean: {
    name: imagesChar['Jean.png'].default,
    artifacts: {
      Flower: {
        type: "Viridescent Venerer",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 24654 10001 501054 501064 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15002_4.png'].default
      },
      Plume: {
        type: "Viridescent Venerer",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 24652 10003 501244 501064 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15002_2.png'].default
      },
      Sands: {
        type: "Viridescent Venerer",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "!g 24655 10004 501244 501054 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15002_5.png'].default
      },
      Goblet: {
        type: "Viridescent Venerer",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 24651 15012 501054 501064 501224,6 501204 lv20",
        img: imagesArts['UI_RelicIcon_15002_1.png'].default
      },
      Circlet: {
        type: "Viridescent Venerer",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "!g 24653 13008 501054 501064 989001,2 501204,6 lv20",
        img: imagesArts['UI_RelicIcon_15002_3.png'].default
      }
    }
  },
  Kazuha: {
    name: imagesChar['Kazuha.png'].default,
    artifacts: {
      Flower: {
        type: "Viridescent Venerer",
        name: <img src={imagesArts['UI_BtnIcon_RelicType1.png'].default} alt='Flower' className='Type' />,
        command: "!g 24654 10001 501244,6 501064 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15002_4.png'].default
      },
      Plume: {
        type: "Viridescent Venerer",
        name: <img src={imagesArts['UI_BtnIcon_RelicType2.png'].default} alt='Plume' className='Type' />,
        command: "!g 24652 10003 501244,6 501064 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15002_2.png'].default
      },
      Sands: {
        type: "Viridescent Venerer",
        name: <img src={imagesArts['UI_BtnIcon_RelicType3.png'].default} alt='Sands' className='Type' />,
        command: "!g 24655 10008 501054 501064 501204,6 501224 lv20",
        img: imagesArts['UI_RelicIcon_15002_5.png'].default
      },
      Goblet: {
        type: "Viridescent Venerer",
        name: <img src={imagesArts['UI_BtnIcon_RelicType4.png'].default} alt='Goblet' className='Type' />,
        command: "!g 24651 15012 501244,6 501064 501204 501224 lv20",
        img: imagesArts['UI_RelicIcon_15002_1.png'].default
      },
      Circlet: {
        type: "Viridescent Venerer",
        name: <img src={imagesArts['UI_BtnIcon_RelicType5.png'].default} alt='Circlet' className='Type' />,
        command: "!g 24653 10008 989001,2 501064 501204,3 501224,4 lv20",
        img: imagesArts['UI_RelicIcon_15002_3.png'].default
      }
    }
  },
};

function Anemo() {

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
      <video src={videoBG['Anemo.mp4'].default} autoPlay loop  muted/>
      <Table striped bordered hover variant="dark" style={{ backgroundColor: "transparent" }}>
        <thead>
          <tr>
            <th colSpan="4" style={{ color: '#aaf9e4' }}>💨💨💨 Best of Artifact - Ameno 💨💨💨</th>
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

export default Anemo