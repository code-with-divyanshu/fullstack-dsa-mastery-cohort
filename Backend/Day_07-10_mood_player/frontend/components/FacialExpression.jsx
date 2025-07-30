import React, { useEffect, useRef } from "react";
import * as faceapi from "face-api.js";

const FacialExpression = () => {
  const videoRef = useRef();
  const loadModels = async () => {
    const MODEL_URL = "/models";
    await faceapi.nets.tinyFaceDetector.loadFromUri(MODEL_URL);
    await faceapi.nets.faceExpressionNet.loadFromUri(MODEL_URL);
  };

  const startVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch((err) => {
        console.error("Errror accessing webcam", err);
      });
  };

  const detectMood = async () => {
    const detections = await faceapi
      .detectAllFaces(videoRef.current, new faceapi.TinyFaceDetectorOptions())
      .withFaceExpressions();

    let mostProbableExpressionCount = 0;
    let mostProbableExpressionName = "";

    if (!detections || detections.length === 0) {
      console.log("No Face Detected");
      return;
    }

    for (const expression of Object.keys(detections[0].expressions)) {
      if (detections[0].expressions[expression] > mostProbableExpressionCount) {
        mostProbableExpressionCount = detections[0].expressions[expression];
        mostProbableExpressionName = expression;
      }
    }

    console.log(mostProbableExpressionName);
  };

  useEffect(() => {
    loadModels().then(startVideo);
  }, []);

  return (
    <div className="relative w-full flex items-center gap-4 justify-start p-16">
      <video
        ref={videoRef}
        autoPlay
        muted
        className="w-[20rem] aspect-video rounded-2xl object-cover"
      />
      <button
        className="bg-purple-700 py-3 px-4 rounded-xl cursor-pointer text-gray-100"
        onClick={detectMood}
      >
        Detect Mood
      </button>
    </div>
  );
};

export default FacialExpression;
