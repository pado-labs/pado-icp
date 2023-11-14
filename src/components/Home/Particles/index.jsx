import React, { useCallback } from "react";
// import Particles from "react-particles-js";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./index.scss";
const ParticlesMy = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    //await loadFull(engine);
    await loadFull(engine);
  }, []);
  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  const options = {
    background: {
      color: {
        value: "rgba(0,0,0,0.1)",
        // value: "transparent",
      },
      position: "50% 50%",
      repeat: "no-repeat",
      size: "cover",
    },
    // 帧数，越低越卡,默认60
    fpsLimit: 120,
    fullScreen: {
      zIndex: 1,
    },
    interactivity: {
      events: {
        onClick: {
          enable: true,
          mode: "push",
        },
        onHover: {
          enable: true,
          mode: "slow",
        },
      },
      modes: {
        push: {
          //点击是添加1个粒子
          quantity: 3,
        },
        bubble: {
          distance: 200,
          duration: 2,
          opacity: 0.8,
          size: 20,
          divs: {
            distance: 200,
            duration: 0.4,
            mix: false,
            selectors: [],
          },
        },
        grab: {
          distance: 400,
        },
        //击退
        repulse: {
          divs: {
            //鼠标移动时排斥粒子的距离
            distance: 200,
            //翻译是持续时间
            duration: 0.4,
            factor: 100,
            speed: 1,
            maxSpeed: 50,
            easing: "ease-out-quad",
            selectors: [],
          },
        },
        //缓慢移动
        slow: {
          //移动速度
          factor: 2,
          //影响范围
          radius: 200,
        },
        //吸引
        attract: {
          distance: 200,
          duration: 0.4,
          easing: "ease-out-quad",
          factor: 3,
          maxSpeed: 50,
          speed: 1,
        },
      },
    },
    //  粒子的参数
    particles: {
      shape: {
        type: "edge",
      },
      // type: "Cloudlet",
      //粒子的颜色
      color: {
        value: "#fff",
      },
      //是否启动粒子碰撞
      collisions: {
        enable: false,
      },
      //粒子之间的线的参数
      links: {
        color: {
          value: "#ffffff",
        },
        distance: 150,
        enable: false,
        warp: true,
      },
      move: {
        attract: {
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        enable: true,
        outModes: {
          bottom: "out",
          left: "out",
          right: "out",
          top: "out",
        },
        speed: 0.1,
        warp: true,
      },
      number: {
        density: {
          enable: true,
          value_area: 10000,
        },
        //初始粒子数
        value: 370,
      },
      //透明度
      opacity: {
        value: 0.5,
        animation: {
          speed: 3,
          minimumValue: 0.1,
        },
      },
      //大小
      size: {
        random: {
          enable: true,
        },
        value: {
          min: 4,
          max: 4,
          random: false,
        },
        animation: {
          speed: 20,
          minimumValue: 0.1,
        },
      },
      // interactivity: {
      //   events: {
      //     // onhover: {
      //     //   enable: true,
      //     //   mode: "repulse",
      //     // },
      //     // onclick: {
      //     //   enable: true,
      //     //   mode: "repulse",
      //     // },
      //     onClick: {
      //       enable: true,
      //       mode: "push",
      //     },
      //     onHover: {
      //       enable: true,
      //       mode: "repulse",
      //     },
      //     resize: true,
      //   },
      // },
    },
  };
  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={options}
    />
  );
};
export default ParticlesMy;
