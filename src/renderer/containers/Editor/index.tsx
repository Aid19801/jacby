// @ts-nocheck
import React from "react";
import WaveSurfer from "wavesurfer.js";
import { connect } from "react-redux";
// var wavesUI = require("waves-ui");
// var loader = new wavesUI.wavesLoaders.AudioBufferLoader();

import "./styles.css";
// import { Dispatch } from "redux";

// import Counter from "../components/Counter";
// import { RootState } from "../reducers";
// import { CounterAction, decrement, increment } from "../actions/counterActions";

function Editor() {
  const loadWav = () => {
    var wavesurfer = WaveSurfer.create({
      container: "#waveform",
      scrollParent: true,
    });
    wavesurfer.load(
      "http://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3"
    );
  };
  React.useEffect(() => {
    loadWav();
  }, []);
  return (
    <div className="editor__container">
      <div className="tools__container">tools will go here</div>
      <div className="timeline__container">
        timeline of clips here
        <div className="track__container">
          <div className="trackInfo__container">
            <h4>Track Name here</h4>
            <div className="trackInfo__soloMuteContainer">
              <p>Solo</p>
              <p>Mute</p>
              <p>Rec</p>
            </div>
          </div>
          <div className="trackWav__container" id="waveform"></div>
        </div>
      </div>
      <div className="controls__container">controls go here</div>
    </div>
  );
}
// const mapStateToProps = (state: RootState) => ({
//   value: state.counter.value,
// });

// const mapDispatchToProps = (dispatch: Dispatch<CounterAction>) => ({
//   incrementValue: () => dispatch(increment()),
//   decrementValue: () => dispatch(decrement()),
// });

export default connect(null, null)(Editor);
