
const symptomTree = {
  Head: {
    Brain: {
      symptoms: [
        {
          name: "Migraine",
          definition: "A severe, throbbing headache, often on one side of the head accompanied by sensitivity to light and sound."
        },
        {
          name: "Tension Headache",
          definition: "A dull, pressing pain across the forehead and sides of the head caused by muscle tightness."
        },
        {
          name: "Dizziness",
          definition: "A sensation of spinning or loss of balance that makes you feel lightheaded or unsteady."
        },
        {
          name: "Vertigo",
          definition: "An intense spinning sensation that feels like the room is rotating around you."
        },
        {
          name: "Confusion",
          definition: "Difficulty thinking clearly or understanding information, causing disorientation or memory problems."
        },
        {
          name: "Brain Fog",
          definition: "A cloudy mental state characterized by difficulty concentrating and reduced mental clarity."
        },
        {
          name: "Seizures",
          definition: "Sudden, uncontrolled electrical activity in the brain causing convulsions or loss of consciousness."
        }
      ]
    },
    Eyes: {
      symptoms: [
        {
          name: "Blurry Vision",
          definition: "Loss of sharpness in eyesight making objects appear unfocused or hazy."
        },
        {
          name: "Dry Eyes",
          definition: "A condition where the eyes don't produce enough tears, causing irritation and discomfort."
        },
        {
          name: "Eye Pain",
          definition: "Sharp or aching discomfort in or around the eye area."
        },
        {
          name: "Floaters",
          definition: "Small, moving shadows or spots that drift across your field of vision."
        },
        {
          name: "Redness",
          definition: "Inflammation of blood vessels in the eye causing the whites to appear pink or red."
        },
        {
          name: "Photophobia",
          definition: "Excessive sensitivity to light causing discomfort or pain when exposed to bright environments."
        },
        {
          name: "Double Vision",
          definition: "Seeing two images of a single object instead of one, causing visual confusion."
        },
        {
          name: "Eye Twitching",
          definition: "Involuntary spasms of the eyelid muscles causing repetitive blinking movements."
        }
      ]
    },
    Ears: {
      symptoms: [
        {
          name: "Hearing Loss",
          definition: "Reduced ability to hear sounds at normal volumes or frequencies."
        },
        {
          name: "Ear Pain",
          definition: "Sharp or dull discomfort inside or around the ear structure."
        },
        {
          name: "Tinnitus",
          definition: "A persistent ringing, buzzing, or hissing sound in the ears that others cannot hear."
        },
        {
          name: "Vertigo",
          definition: "A spinning sensation caused by inner ear problems affecting balance."
        },
        {
          name: "Ear Discharge",
          definition: "Fluid or pus draining from the ear, often indicating infection or rupture."
        },
        {
          name: "Earwax Buildup",
          definition: "Excessive accumulation of cerumen in the ear canal causing blockage and hearing difficulty."
        },
        {
          name: "Balance Problems",
          definition: "Difficulty maintaining stability or coordination, often related to inner ear dysfunction."
        }
      ]
    },
    Nose: {
      symptoms: [
        {
          name: "Congestion",
          definition: "Blockage of nasal passages due to inflammation or mucus accumulation, making breathing difficult."
        },
        {
          name: "Runny Nose",
          definition: "Excessive nasal discharge or mucus dripping from the nose."
        },
        {
          name: "Nosebleeds",
          definition: "Bleeding from the nose caused by damaged blood vessels in the nasal passages."
        },
        {
          name: "Loss of Smell",
          definition: "Inability to detect odors due to damage or inflammation of smell receptors."
        },
        {
          name: "Sinus Pain",
          definition: "Pressure or aching sensation in the sinus cavities around the nose and eyes."
        },
        {
          name: "Nasal Polyps",
          definition: "Soft, benign growths in the nasal passages that obstruct airflow and cause congestion."
        },
        {
          name: "Postnasal Drip",
          definition: "Excess mucus flowing from the sinuses down the back of the throat causing coughing."
        },
        {
          name: "Sneezing",
          definition: "Involuntary explosive release of air through the nose and mouth as a reflex."
        }
      ]
    },
    Mouth: {
      symptoms: [
        {
          name: "Sore Throat",
          definition: "Pain or irritation in the throat, often worse when swallowing."
        },
        {
          name: "Tooth Pain",
          definition: "Sharp or throbbing discomfort in one or more teeth, usually caused by decay or infection."
        },
        {
          name: "Mouth Ulcers",
          definition: "Painful open sores on the inside of the mouth or gums that make eating difficult."
        },
        {
          name: "Difficulty Swallowing",
          definition: "Pain or obstruction when attempting to swallow food or liquid."
        },
        {
          name: "Dry Mouth",
          definition: "Lack of saliva production causing the mouth to feel parched and uncomfortable."
        },
        {
          name: "Bad Breath",
          definition: "Persistent foul odor from the mouth often caused by bacteria or poor oral hygiene."
        },
        {
          name: "Tongue Swelling",
          definition: "Abnormal enlargement of the tongue causing difficulty speaking or swallowing."
        },
        {
          name: "Jaw Pain",
          definition: "Discomfort or soreness in the jaw joint or surrounding muscles affecting chewing."
        }
      ]
    }
  },
  Chest: {
    Heart: {
      symptoms: [
        {
          name: "Chest Pain",
          definition: "Discomfort or pressure in the chest area, potentially indicating cardiac or other issues."
        },
        {
          name: "Palpitations",
          definition: "Abnormal awareness of the heartbeat, feeling like fluttering or racing in the chest."
        },
        {
          name: "Shortness of Breath",
          definition: "Difficulty breathing or feeling like you're not getting enough air."
        },
        {
          name: "Irregular Heartbeat",
          definition: "Arrhythmia where the heart beats at an inconsistent rhythm or pace."
        },
        {
          name: "Dizziness",
          definition: "Lightheadedness or fainting sensation caused by reduced blood flow to the brain."
        },
        {
          name: "Fatigue",
          definition: "Extreme tiredness and lack of energy caused by inadequate heart function."
        },
        {
          name: "Heart Murmur",
          definition: "An abnormal sound heard through a stethoscope indicating turbulent blood flow."
        },
        {
          name: "Swollen Ankles",
          definition: "Fluid retention in the ankles and legs due to poor heart circulation."
        }
      ]
    },
    Lungs: {
      symptoms: [
        {
          name: "Persistent Cough",
          definition: "A lingering cough lasting more than a few weeks, often with mucus production."
        },
        {
          name: "Wheezing",
          definition: "A whistling sound when breathing, caused by narrowed airways or airways filled with fluid."
        },
        {
          name: "Chest Tightness",
          definition: "A feeling of pressure or constriction in the chest affecting breathing comfort."
        },
        {
          name: "Shallow Breathing",
          definition: "Rapid, weak breathing pattern that doesn't fully fill the lungs with air."
        },
        {
          name: "Shortness of Breath",
          definition: "Difficulty obtaining sufficient air, especially during physical activity or at rest."
        },
        {
          name: "Hemoptysis",
          definition: "Coughing up blood or blood-tinged mucus from the respiratory tract."
        },
        {
          name: "Crackling Sounds",
          definition: "Abnormal rattling or popping sounds heard in the lungs during breathing."
        },
        {
          name: "Labored Breathing",
          definition: "Difficult or strained breathing requiring extra effort and conscious attention."
        }
      ]
    },
    Esophagus: {
      symptoms: [
        {
          name: "Heartburn",
          definition: "A burning sensation in the chest or throat caused by stomach acid backing up."
        },
        {
          name: "Acid Reflux",
          definition: "Stomach acid flowing backward into the esophagus causing irritation and discomfort."
        },
        {
          name: "Difficulty Swallowing",
          definition: "Painful or obstructed swallowing sensation when eating or drinking."
        },
        {
          name: "Chest Pain",
          definition: "Discomfort behind the breastbone, sometimes mistaken for heart pain."
        },
        {
          name: "Regurgitation",
          definition: "Involuntary return of food or liquid from the stomach back to the mouth."
        },
        {
          name: "Bloating",
          definition: "Uncomfortable fullness and swelling in the abdomen due to excess gas."
        },
        {
          name: "Nausea",
          definition: "Feeling of sickness and queasiness, often preceding vomiting."
        },
        {
          name: "Esophageal Spasm",
          definition: "Uncoordinated contractions of the esophagus causing sharp chest pain."
        }
      ]
    },
    Ribs: {
      symptoms: [
        {
          name: "Rib Pain",
          definition: "Localized discomfort on the sides of the chest between the ribs."
        },
        {
          name: "Muscle Soreness",
          definition: "Aching or tenderness in the muscles surrounding the rib cage from strain or injury."
        },
        {
          name: "Sharp Pain on Breathing",
          definition: "Intense, stabbing pain in the ribs that worsens when taking deep breaths."
        },
        {
          name: "Bruising",
          definition: "Discoloration and tenderness of skin and tissues following rib trauma."
        },
        {
          name: "Costochondritis",
          definition: "Inflammation of the cartilage connecting ribs to the breastbone causing chest pain."
        },
        {
          name: "Rib Fracture",
          definition: "A break in one or more rib bones causing severe pain and potential breathing difficulty."
        },
        {
          name: "Intercostal Neuralgia",
          definition: "Nerve pain between the ribs causing sharp, burning sensations along the chest wall."
        },
        {
          name: "Tightness",
          definition: "A feeling of constriction or pressure around the rib cage area."
        }
      ]
    }
  },
  Abdomen: {
    UpperAbdomen: {
      symptoms: [
        {
          name: "Upper Abdominal Pain",
          definition: "Discomfort or soreness in the area above the navel, often related to digestive organs."
        },
        {
          name: "Loss of Appetite",
          definition: "Reduced desire to eat or complete lack of hunger, affecting food intake."
        },
        {
          name: "Indigestion",
          definition: "Discomfort or burning sensation in the upper abdomen caused by difficult digestion."
        },
        {
          name: "Burping",
          definition: "Release of gas from the stomach through the mouth, often accompanied by sound."
        },
        {
          name: "Nausea",
          definition: "Feeling of sickness and queasiness with an urge to vomit."
        },
        {
          name: "Stomach Cramps",
          definition: "Sharp, spasmodic pain in the stomach area lasting from minutes to hours."
        },
        {
          name: "Bloating",
          definition: "Uncomfortable swelling of the abdomen due to excess gas or fluid accumulation."
        },
        {
          name: "Vomiting",
          definition: "Forceful expulsion of stomach contents through the mouth and nose."
        }
      ]
    },
    LowerAbdomen: {
      symptoms: [
        {
          name: "Lower Abdominal Pain",
          definition: "Discomfort or soreness below the navel, often related to intestinal issues."
        },
        {
          name: "Constipation",
          definition: "Difficulty or infrequency in bowel movements, resulting in hard stool passage."
        },
        {
          name: "Diarrhea",
          definition: "Frequent passage of loose or watery stools, indicating digestive distress."
        },
        {
          name: "Cramping",
          definition: "Sudden, intense spasmodic pain in the lower abdomen usually temporary."
        },
        {
          name: "Abdominal Distension",
          definition: "Abnormal swelling or protrusion of the lower abdomen."
        },
        {
          name: "Urgency to Defecate",
          definition: "Sudden, strong need to have a bowel movement immediately."
        },
        {
          name: "Intestinal Gas",
          definition: "Excessive gas buildup in the intestines causing discomfort and bloating."
        },
        {
          name: "Rectal Pain",
          definition: "Sharp or dull pain in the rectal area, often worsened during bowel movements."
        }
      ]
    },
    Sides: {
      symptoms: [
        {
          name: "Side Stitch",
          definition: "Sharp, sudden pain on the side of the abdomen, often triggered by physical activity."
        },
        {
          name: "Kidney Pain",
          definition: "Dull, severe discomfort on either side of the lower back below the ribs."
        },
        {
          name: "Side Tenderness",
          definition: "Sensitivity or soreness along the lateral abdominal area."
        },
        {
          name: "Sharp Side Pain",
          definition: "Acute, stabbing pain localized to one or both sides of the midsection."
        },
        {
          name: "Flank Swelling",
          definition: "Abnormal enlargement or puffiness on the sides of the body."
        },
        {
          name: "Muscle Spasm",
          definition: "Involuntary contraction of abdominal muscles on the sides causing pain."
        },
        {
          name: "Referred Pain",
          definition: "Discomfort felt on the sides originating from internal organs or nerves."
        },
        {
          name: "Radiating Side Pain",
          definition: "Pain that starts on one side and spreads to other areas of the abdomen."
        }
      ]
    },
    Back: {
      symptoms: [
        {
          name: "Lower Back Pain",
          definition: "Discomfort or soreness in the lower spine and surrounding muscle tissue."
        },
        {
          name: "Stiffness",
          definition: "Reduced flexibility and range of motion in the back, especially after rest."
        },
        {
          name: "Muscle Tension",
          definition: "Tightness and rigidity of back muscles causing discomfort and restricted movement."
        },
        {
          name: "Radiating Pain",
          definition: "Pain originating in the lower back and extending down into the legs or buttocks."
        },
        {
          name: "Spasm",
          definition: "Sudden, involuntary contraction of back muscles causing acute pain."
        },
        {
          name: "Burning Sensation",
          definition: "Intense heat-like pain across the back area."
        },
        {
          name: "Stabbing Pain",
          definition: "Sharp, piercing pain in the back that comes and goes suddenly."
        },
        {
          name: "Postural Pain",
          definition: "Back discomfort triggered or worsened by poor posture or prolonged sitting."
        }
      ]
    },
    Pelvis: {
      symptoms: [
        {
          name: "Pelvic Pain",
          definition: "Discomfort in the lower abdomen and pelvic region below the waist."
        },
        {
          name: "Pelvic Pressure",
          definition: "Sensation of heaviness or downward pressure in the pelvic area."
        },
        {
          name: "Hip Pain",
          definition: "Soreness or discomfort at the hip joints affecting mobility."
        },
        {
          name: "Groin Pain",
          definition: "Acute or chronic discomfort in the area where the abdomen meets the thigh."
        },
        {
          name: "Urinary Symptoms",
          definition: "Pain or difficulty during urination, often indicating urinary tract issues."
        },
        {
          name: "Bowel Dysfunction",
          definition: "Abnormal bowel movement patterns or discomfort during elimination."
        },
        {
          name: "Pelvic Heaviness",
          definition: "Persistent sensation of fullness or weight in the pelvic region."
        },
        {
          name: "Sharp Pelvic Cramps",
          definition: "Intense, sudden spasmodic pain localized to the pelvis."
        }
      ]
    }
  },
  Limbs: {
    Arms: {
      symptoms: [
        {
          name: "Arm Pain",
          definition: "Soreness or discomfort in the upper or lower arm muscles or joints."
        },
        {
          name: "Numbness",
          definition: "Loss of sensation or tingling in the arm, often indicating nerve compression."
        },
        {
          name: "Weakness",
          definition: "Reduced strength or inability to perform normal arm movements or lift objects."
        },
        {
          name: "Tingling",
          definition: "Prickling or pins-and-needles sensation in the arm or hand."
        },
        {
          name: "Muscle Cramps",
          definition: "Sudden, involuntary contraction of arm muscles causing acute pain."
        },
        {
          name: "Swelling",
          definition: "Abnormal enlargement or puffiness of the arm tissue."
        },
        {
          name: "Stiffness",
          definition: "Reduced flexibility and difficulty moving the arm through its full range."
        },
        {
          name: "Bruising",
          definition: "Discoloration of arm skin following trauma or injury."
        }
      ]
    },
    Hands: {
      symptoms: [
        {
          name: "Hand Pain",
          definition: "Discomfort or soreness in the hands, fingers, or palm area."
        },
        {
          name: "Carpal Tunnel Syndrome",
          definition: "Numbness and weakness in the hand caused by pressure on the wrist nerve."
        },
        {
          name: "Swelling",
          definition: "Abnormal enlargement of the hands or fingers affecting dexterity."
        },
        {
          name: "Joint Stiffness",
          definition: "Reduced mobility and flexibility of finger joints, especially upon waking."
        },
        {
          name: "Tremors",
          definition: "Involuntary shaking or quivering of the hands affecting fine motor control."
        },
        {
          name: "Coldness",
          definition: "Abnormally low hand temperature indicating poor circulation."
        },
        {
          name: "Discoloration",
          definition: "Unusual paleness, redness, or color changes in the hands."
        },
        {
          name: "Numbness in Fingers",
          definition: "Loss of sensation in specific fingers indicating nerve involvement."
        }
      ]
    },
    Legs: {
      symptoms: [
        {
          name: "Leg Pain",
          definition: "Soreness or discomfort in the thigh, calf, or entire leg."
        },
        {
          name: "Muscle Cramps",
          definition: "Sudden, involuntary contraction of leg muscles causing severe pain."
        },
        {
          name: "Weakness",
          definition: "Reduced strength or difficulty bearing weight on the legs or walking."
        },
        {
          name: "Swelling",
          definition: "Abnormal enlargement of the leg or ankle due to fluid retention."
        },
        {
          name: "Numbness",
          definition: "Loss of sensation in the leg indicating nerve compression or damage."
        },
        {
          name: "Restless Leg Syndrome",
          definition: "Uncomfortable sensations in the legs with an irresistible urge to move them."
        },
        {
          name: "Varicose Veins",
          definition: "Enlarged, twisted veins in the legs causing discomfort and visible bulging."
        },
        {
          name: "Stiffness",
          definition: "Reduced flexibility and difficulty bending or straightening the legs."
        }
      ]
    },
    Feet: {
      symptoms: [
        {
          name: "Foot Pain",
          definition: "Discomfort or soreness in the feet affecting walking and mobility."
        },
        {
          name: "Heel Pain",
          definition: "Sharp or dull discomfort in the heel, often worsened by walking or standing."
        },
        {
          name: "Numbness",
          definition: "Loss of sensation in the feet, often indicating diabetes or nerve damage."
        },
        {
          name: "Burning Sensation",
          definition: "Intense heat-like pain in the feet, especially in the soles."
        },
        {
          name: "Swelling",
          definition: "Abnormal enlargement of the feet or ankles limiting shoe fit."
        },
        {
          name: "Blisters",
          definition: "Fluid-filled pockets on the skin caused by friction or irritation."
        },
        {
          name: "Corns and Calluses",
          definition: "Hardened, thickened areas of skin on the feet causing discomfort."
        },
        {
          name: "Fungal Infections",
          definition: "Itchy, discolored patches on the feet caused by fungal organisms."
        }
      ]
    }
  },
  Skin: {
    GeneralSkin: {
      symptoms: [
        {
          name: "Itching",
          definition: "Persistent urge to scratch the skin, often indicating irritation or allergic reaction."
        },
        {
          name: "Rash",
          definition: "Abnormal red or bumpy skin appearance, often itchy or painful."
        },
        {
          name: "Hives",
          definition: "Raised, itchy welts on the skin, typically resulting from allergic reactions."
        },
        {
          name: "Redness",
          definition: "Abnormal pink or red discoloration of the skin indicating inflammation."
        },
        {
          name: "Dryness",
          definition: "Skin lacking moisture, appearing flaky, tight, or uncomfortable."
        },
        {
          name: "Oiliness",
          definition: "Excess sebum production on the skin causing a shiny or greasy appearance."
        },
        {
          name: "Sensitivity",
          definition: "Skin that reacts negatively to products, weather, or friction causing irritation."
        },
        {
          name: "Discoloration",
          definition: "Uneven skin tone with patches of darker or lighter areas than normal."
        }
      ]
    },
    Acne: {
      symptoms: [
        {
          name: "Pimples",
          definition: "Small, inflamed bumps on the skin filled with pus, typically on the face."
        },
        {
          name: "Blackheads",
          definition: "Open pores clogged with dead skin and sebum, appearing dark in color."
        },
        {
          name: "Whiteheads",
          definition: "Closed pores clogged with sebum and skin cells appearing as white or flesh-colored bumps."
        },
        {
          name: "Cystic Acne",
          definition: "Large, painful, deep-seated infections beneath the skin surface."
        },
        {
          name: "Acne Scars",
          definition: "Permanent indentations or marks on the skin left after acne heals."
        },
        {
          name: "Inflammation",
          definition: "Redness and swelling around acne lesions indicating infection or irritation."
        },
        {
          name: "Oil Production",
          definition: "Excessive sebum secretion leading to shiny skin and increased acne formation."
        },
        {
          name: "Tenderness",
          definition: "Pain or soreness when touching acne-affected areas of skin."
        }
      ]
    },
    HairAndScalp: {
      symptoms: [
        {
          name: "Hair Loss",
          definition: "Excessive shedding of hair more than the normal daily hair fall."
        },
        {
          name: "Dandruff",
          definition: "Flaking of the scalp resulting in white or yellowish flakes on hair and shoulders."
        },
        {
          name: "Itchy Scalp",
          definition: "Persistent itching sensation on the scalp causing discomfort and urge to scratch."
        },
        {
          name: "Scalp Flaking",
          definition: "Shedding of dead skin cells from the scalp in visible white or gray particles."
        },
        {
          name: "Scalp Redness",
          definition: "Inflammation or irritation of the scalp causing visible red discoloration."
        },
        {
          name: "Oily Hair",
          definition: "Excess sebum production making hair appear greasy and limp."
        },
        {
          name: "Dry Hair",
          definition: "Hair lacking moisture appearing dull, brittle, and prone to breakage."
        },
        {
          name: "Scalp Soreness",
          definition: "Tenderness or pain when touching the scalp or combing hair."
        }
      ]
    },
    Nails: {
      symptoms: [
        {
          name: "Brittle Nails",
          definition: "Nails that are weak and prone to breaking, splitting, or peeling."
        },
        {
          name: "Discoloration",
          definition: "Nails appearing yellow, brown, white, or with unusual pigmentation."
        },
        {
          name: "Ridges",
          definition: "Vertical or horizontal grooves or lines running across the nail surface."
        },
        {
          name: "Nail Pain",
          definition: "Discomfort or soreness in the nail bed or surrounding tissue."
        },
        {
          name: "Nail Fungus",
          definition: "Fungal infection causing nails to become discolored, thick, and crumbly."
        },
        {
          name: "Peeling",
          definition: "Layers of nail separating and flaking away from the nail bed."
        },
        {
          name: "White Spots",
          definition: "Small white marks appearing on the nail surface, usually harmless."
        },
        {
          name: "Swelling Around Nails",
          definition: "Inflammation or puffiness of the tissue surrounding the nail bed."
        }
      ]
    }
  }
};

export default symptomTree;



