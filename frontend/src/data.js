const symptomTree = {
  Head: {
    Eyes: {
      symptoms: ['Blurry Vision', 'Dry Eyes', 'Eye Pain', 'Floaters']
    },
    Ears: {
      symptoms: ['Hearing Loss', 'Ear Pain', 'Ringing', 'Dizziness']
    },
    Nose: {
      symptoms: ['Congestion', 'Runny Nose', 'Nosebleeds', 'Loss of Smell']
    },
    Mouth: {
      symptoms: ['Sore Throat', 'Tooth Pain', 'Mouth Ulcers', 'Difficulty Swallowing']
    }
  },
  Chest: {
    Heart: {
      symptoms: ['Chest Pain', 'Palpitations', 'Shortness of Breath', 'Irregular Heartbeat']
    },
    Lungs: {
      symptoms: ['Persistent Cough', 'Wheezing', 'Chest Tightness', 'Shallow Breathing']
    },
    Stomach: {
      symptoms: ['Nausea', 'Vomiting', 'Heartburn', 'Bloating']
    },
    Ribs: {
      symptoms: ['Rib Pain', 'Muscle Soreness', 'Sharp Pain on Breathing', 'Bruising']
    }
  },
  Abdomen: {
    Upper: {
      symptoms: ['Upper Abdominal Pain', 'Loss of Appetite', 'Indigestion', 'Burping']
    },
    Lower: {
      symptoms: ['Lower Abdominal Pain', 'Constipation', 'Diarrhea', 'Cramping']
    },
    Sides: {
      symptoms: ['Side Stitch', 'Kidney Pain', 'Side Tenderness', 'Sharp Side Pain']
    },
    Back: {
      symptoms: ['Lower Back Pain', 'Stiffness', 'Muscle Tension', 'Radiating Pain']
    }
  },
  Limbs: {
    Arms: {
      symptoms: ['Arm Pain', 'Numbness', 'Weakness', 'Tingling']
    },
    Hands: {
      symptoms: ['Hand Pain', 'Carpal Tunnel Symptoms', 'Swelling', 'Joint Stiffness']
    },
    Legs: {
      symptoms: ['Leg Pain', 'Muscle Cramps', 'Weakness', 'Swelling']
    },
    Feet: {
      symptoms: ['Foot Pain', 'Heel Pain', 'Numbness', 'Burning Sensation']
    }
  },
  Skin: {
    Face: {
      symptoms: ['Acne', 'Rashes', 'Redness', 'Dryness']
    },
    Body: {
      symptoms: ['Itching', 'Hives', 'Discoloration', 'Blistering']
    },
    Scalp: {
      symptoms: ['Hair Loss', 'Dandruff', 'Itchy Scalp', 'Flaking']
    },
    Nails: {
      symptoms: ['Brittle Nails', 'Discoloration', 'Ridges', 'Nail Pain']
    }
  }
};

export default symptomTree;