import { useState } from "react";

let symptomsArr = [
  { key: "itching", name: "Itching" },
  { key: "skin_rash", name: "Skin rash" },
  { key: "nodal_skin_eruptions", name: "Nodal skin eruptions" },
  { key: "continuous_sneezing", name: "Continuous sneezing" },
  { key: "shivering", name: "Shivering" },
  { key: "chills", name: "Chills" },
  { key: "joint_pain", name: "Joint pain" },
  { key: "stomach_pain", name: "Stomach pain" },
  { key: "acidity", name: "Acidity" },
  { key: "ulcers_on_tongue", name: "Ulcers on tongue" },
  { key: "muscle_wasting", name: "Muscle wasting" },
  { key: "vomiting", name: "Vomiting" },
  { key: "burning_micturition", name: "Burning micturition" },
  { key: "spotting_urination", name: "Spotting urination" },
  { key: "fatigue", name: "Fatigue" },
  { key: "weight_gain", name: "Weight gain" },
  { key: "anxiety", name: "Anxiety" },
  { key: "cold_hands_and_feets", name: "Cold hands and feets" },
  { key: "mood_swings", name: "Mood Swings" },
  { key: "weight_loss", name: "Wight loss" },
  { key: "restlessness", name: "Restlessness" },
  { key: "lethargy", name: "Lethargy" },
  { key: "patches_in_throat", name: "Patches in throat" },
  { key: "irregular_sugar_level", name: "Irregular sugar level" },
  { key: "cough", name: "Cough" },
  { key: "high_fever", name: "High fever" },
  { key: "sunken_eyes", name: "Sunken eyes" },
  { key: "breathlessness", name: "Breathlessness" },
  { key: "sweating", name: "Sweating" },
  { key: "dehydration", name: "Dehydration" },
  { key: "indigestion", name: "Indigestion" },
  { key: "headache", name: "Headace" },
  { key: "yellowish_skin", name: "Yellowish skin" },
  { key: "dark_urine", name: "dark urine" },
  { key: "nausea", name: "Nausea" },
  { key: "loss_of_appetite", name: "Loss of Appetite" },
  { key: "pain_behind_the_eyes", name: "Pain behind the eyes" },
  { key: "back_pain", name: "Back pain" },
  { key: "constipation", name: "Constipation" },
  { key: "abdominal_pain", name: "Abdominal pain" },
  { key: "diarrhoea", name: "Diarrhoea" },
  { key: "mild_fever", name: "Mild fever" },
  { key: "yellow_urine", name: "yellow urine" },
  { key: "yellowing_of_eyes", name: "Yellowing of eyes" },
  { key: "acute_liver_failure", name: "Acute liver failure" },
  { key: "fluid_overload", name: "Fluid overload" },
  { key: "swelling_of_stomach", name: "Swelling of stomach" },
  { key: "swelled_lymph_nodes", name: "Swelled lymph nodes" },
  { key: "malaise", name: "Malaise" },
  { key: "blurred_and_distorted_vision", name: "Blurred and distorted vision" },
  { key: "phlegm", name: "Phlegm" },
  { key: "throat_irritation", name: "Throat irrigation" },
  { key: "redness_of_eyes", name: "Redness of eyes" },
  { key: "sinus_pressure", name: "Sinus pressure" },
  { key: "runny_nose", name: "Runny nose" },
  { key: "congestion", name: "Congestion" },
  { key: "chest_pain", name: "Chest pain" },
  { key: "weakness_in_limbs", name: "Weakness in limbs" },
  { key: "fast_heart_rate", name: "Fast heart rate" },
  { key: "pain_during_bowel_movements", name: "Pain during bowel movements" },
  { key: "pain_in_anal_region", name: "Pain in anal region" },
  { key: "bloody_stool", name: "Bloody stool" },
  { key: "irritation_in_anus", name: "Irritation in anus" },
  { key: "neck_pain", name: "Neck pain" },
  { key: "dizziness", name: "Dizziness" },
  { key: "cramps", name: "Cramps" },
  { key: "bruising", name: "Bruising" },
  { key: "obesity", name: "Obesity" },
  { key: "swollen_legs", name: "Swollen Legs" },
  { key: "swollen_blood_vessels", name: "Swollen blood vessels" },
  { key: "puffy_face_and_eyes", name: "Puffy face and eyes" },
  { key: "enlarged_thyroid", name: "enlarged thyroid" },
  { key: "brittle_nails", name: "Brittle nails" },
  { key: "swollen_extremeties", name: "Swollen extremeties" },
  { key: "excessive_hunger", name: "Excessive hunger" },
  { key: "extra_marital_contacts", name: "Extra marital contracts" },
  { key: "drying_and_tingling_lips", name: "Drying and tingling lips" },
  { key: "slurred_speech", name: "Slurred speech" },
  { key: "knee_pain", name: "Knee pain" },
  { key: "hip_joint_pain", name: "Hip joint pain" },
  { key: "muscle_weakness", name: "Muscle weakness" },
  { key: "stiff_neck", name: "Stiff neck" },
  { key: "swelling_joints", name: "Swelling joints" },
  { key: "movement_stiffness", name: "Movement stiffness" },
  { key: "spinning_movements", name: "Spinning movements" },
  { key: "loss_of_balance", name: "Loss of balance" },
  { key: "unsteadiness", name: "Unssteadiness" },
  { key: "weakness_of_one_body_side", name: "Weakness of one body side" },
  { key: "loss_of_smell", name: "Loss of smell" },
  { key: "bladder_discomfort", name: "Bladder discomfort" },
  { key: "foul_smell_of_urine", name: "Foul smell of urine" },
  { key: "continuous_feel_of_urine", name: "Continuous feel of urine" },
  { key: "passage_of_gases", name: "Passage of gases" },
  { key: "internal_itching", name: "Internal itching" },
  { key: "toxic_look_typhos", name: "Toxic look typhos" },
  { key: "depression", name: "Depression" },
  { key: "irritability", name: "Irritability" },
  {
    key: "muscle_pain_altered_sensorium",
    name: "Muscle pain altered sensorium"
  },
  { key: "red_spots_over_body", name: "Red spots over body" },
  { key: "belly_pain", name: "Belly pain" },
  { key: "abnormal_menstruation", name: "Abnormal menstruation" },
  { key: "dischromic_patches", name: "Dischromic patches" },
  { key: "watering_from_eyes", name: "watering from eyes" },
  { key: "increased_appetite", name: "Increased appetite" },
  { key: "polyuria", name: "Polyuria" },
  { key: "family_history", name: "Family history" },
  { key: "mucoid_sputum", name: "Mucoid sputum" },
  { key: "rusty_sputum", name: "Rusty sputum" },
  { key: "lack_of_concentration", name: "Lack of concentration" },
  { key: "visual_disturbances", name: "Visual disturbances" },
  { key: "receiving_blood_transfusion", name: "Receiving blood transfusion" },
  {
    key: "receiving_unsterile_injections",
    name: "Receiving unsterile injections"
  },
  { key: "coma", name: "Coma" },
  { key: "stomach_bleeding", name: "Stomach bleedin" },
  { key: "distention_of_abdomen", name: "Distention of abdomen" },
  {
    key: "history_of_alcohol_consumption",
    name: "history of alcohol consumption"
  },
  { key: "blood_in_sputum", name: "Blood in sputum" },
  { key: "prominent_veins_on_calf", name: "Prominent veins on calf" },
  { key: "palpitations", name: "Palpitations" },
  { key: "painful_walking", name: "Painful Walking" },
  { key: "pus_filled_pimples", name: "Pus filled pimples" },
  { key: "blackheads", name: "Blackheads" },
  { key: "scurring", name: "Scurring" },
  { key: "skin_peeling", name: "Skin peeling" },
  { key: "silver_like_dusting", name: "Silver like dusting" },
  { key: "small_dents_in_nails", name: "Small dents in nails" },
  { key: "inflammatory_nails", name: "Inflammatory nails" },
  { key: "blister", name: "Blisters" },
  { key: "red_sore_around_nose", name: "Red sore around nose" },
  { key: "yellow_crust_ooze", name: "yellow crust ooze" }
];
let Trial = () => {
  // let [search, setSearch] = useState("");
  let [arr, setArr] = useState(symptomsArr);

  // const fillArrWithOption = () => {
  //   // let s = {
  //   //   key1:0,
  //   //   key2:1,
  //   //   key3:2,
  //   //   key4:3,
  //   //   key5:4,
  //   // }
  //   symptomsArr.forEach((el, i) => {
  //     let s = {
  //       key1: 0 + i,
  //       key2: 1 + i,
  //       key3: 2 + i,
  //       key4: 3 + i,
  //       key5: 4 + i
  //     };
  //     symptomsArr.push(s);
  //   });
  //   console.log("fill", symptomsArr);
  // };
  // fillArrWithOption();

  let filter = (value) => {
    if (value === "acc") {
      let acc = [...symptomsArr].sort((a, b) => (a.name > b.name ? 1 : -1));
      console.log(acc);
      setArr(acc);
    } else if (value === "dcc") {
      let dcc = [...symptomsArr].sort((a, b) => (a.name > b.name ? -1 : 1));
      console.log(dcc);
      setArr(dcc);
    } else if (value === "org") {
      let org = symptomsArr;
      console.log(org);
      setArr(org);
    }
  };
  let searchHandler = (key) => {
    let searchArr = [...symptomsArr]
      .filter(({ name }) => name.toLowerCase().includes(key.toLowerCase()))
      .sort((a, b) => {
        if (
          a.name.toLowerCase().indexOf(key.toLowerCase()) >
          b.name.toLowerCase().indexOf(key.toLowerCase())
        ) {
          return 1;
        } else if (
          a.name.toLowerCase().indexOf(key.toLowerCase()) <
          b.name.toLowerCase().indexOf(key.toLowerCase())
        ) {
          return -1;
        } else {
          if (a.name > b.name) return 1;
          else return -1;
        }
      });
    setArr(searchArr);
    console.log(searchArr);
  };

  return (
    <>
      <label>
        Filter List
        <select name="filter" onChange={(e) => filter(e.target.value)}>
          <option value="org">Original</option>
          <option value="acc">A-Z</option>
          <option value="dcc">Z-A</option>
        </select>
      </label>
      <label>
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => searchHandler(e.target.value)}
        />
      </label>
      {arr.length ? "" : <h1>not found</h1>}

      {arr.map((el) => {
        return (
          <>
            <div className="conainter_symptoms">
              <h4 className="symptom">{el.name}</h4>
              <label name={el.name} className="radio_label">
                Yes
              </label>
              <input
                key={el.name}
                className="symptoms_radio"
                type="radio"
                value={1}
                name={el.key}
                required
              />
              <label name={el.name} className="radio_label">
                No
              </label>
              <input
                key={el.key}
                className="symptoms_radio"
                type="radio"
                value={0}
                name={el.key}
                defaultChecked
              />
              <hr />
            </div>
          </>
        );
      })}
    </>
  );
};
export default Trial;
