import { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import SelectButton from "./SelectButton";
import CustomTextInput from "./CustomTextInput";
import CustomLink from "./CustomLink";
import MouseOverButton from "./MouseOverButton";

function App() {
  const isPublicName = "isPublicName";
  const checkBox = "checkBox";
  const [isOpen, setIsOpen] = useState(false);
  const [radioCheck, setRadioCheck] = useState({
    public: true,
    private: false,
  });

  useEffect(() => {
    window.addEventListener("click", clickListener);
    return () => {
      window.removeEventListener("click", clickListener);
    };
  });
  function clickListener() {
    console.log("clicked");
    setIsOpen(false);
  }

  function setRadioCheckfn(event) {
    let obj = {};
    for (const [k, v] of Object.entries(radioCheck)) {
      obj[k] = false;
    }

    obj[event.target.value] = event.target.checked;
    console.log("object:", obj);
    setRadioCheck(obj);
  }

  return (
    <View style={{ alignItems: "center" }}>
      <View style={{ height: 40 }} />
      <View style={{ width: 720 }}>
        {/* create a new repo */}
        <View style={styles.div}>
          <Text style={{ fontSize: 24, fontWeight: "400", lineHeight: 36 }}>
            Create a new repository
          </Text>
          <Text style={styles.subheadDescription}>
            A repository contains all project files, including the revision
            history. Already have a project repository elsewhere?{" "}
            <CustomLink href="#">Import a repository.</CustomLink>
          </Text>
        </View>
        {/* owner */}
        <View style={{ flexDirection: "row", zIndex: 99 }}>
          {/* owner */}
          <View>
            <Text style={styles.ownRepo}>
              Owner<Text style={{ color: "#cb2431" }}> *</Text>
            </Text>
            <View style={styles.selectBoxDiv}>
              <SelectButton
                isOpen={isOpen}
                setIsOpen={() => {
                  setIsOpen(!isOpen);
                }}
                values={["user1asdf", "user2qwer", "asdfasf"]}
              />
            </View>
          </View>
          {/* / */}
          <View style={{ paddingLeft: 7, paddingRight: 7 }}>
            <Text style={styles.ownRepo}> </Text>
            <View style={styles.selectBoxDiv}>
              <Text style={{ fontSize: 24 }}>/</Text>
            </View>
          </View>
          {/* repository name */}
          <View>
            <Text style={styles.ownRepo}>
              Repository name<Text style={{ color: "#cb2431" }}> *</Text>
            </Text>
            <View style={styles.selectBoxDiv}>
              <CustomTextInput style={{ width: 255 }} />
            </View>
          </View>
        </View>
        {/*  */}
        <Text>
          Great repository names are short and memorable. Need inspiration? How
          about{" "}
          <a
            style={{
              textDecorationLine: "none",
              color: "#22863a",
              fontWeight: "bold",
            }}
            href="#"
          >
            ubiquitous-spoon?
          </a>
        </Text>
        {/* description (optional) */}
        <View style={{ height: 15 }} />
        <View style={[styles.div, { marginBottom: 15 }]}>
          <Text style={styles.ownRepo}>
            Description{" "}
            <Text style={{ fontSize: 12, color: "#586069" }}>(optional)</Text>
          </Text>
          <View style={{ height: 6 }} />
          <CustomTextInput style={{ width: "100%" }} />
          <View style={{ height: 15 }} />
        </View>
        {/* radio button */}
        <View style={[styles.div, { marginBottom: 15 }]}>
          {/* public */}
          <label>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ marginBottom: 10, paddingRight: 4 }}>
                <input
                  type="radio"
                  name={isPublicName}
                  value={"public"}
                  checked={radioCheck.public}
                  onChange={setRadioCheckfn}
                />
              </View>
              <View style={{ paddingRight: 4 }}>
                <svg width="32" height="32" fill="#6a737d" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M 3 2.75 A 2.75 2.75 0 0 1 5.75 0 h 14.5 a 0.75 0.75 0 0 1 0.75 0.75 v 20.5 a 0.75 0.75 0 0 1 -0.75 0.75 h -6 a 0.75 0.75 0 0 1 0 -1.5 h 5.25 v -4 H 6 A 1.5 1.5 0 0 0 4.5 18 v 0.75 c 0 0.716 0.43 1.334 1.05 1.605 a 0.75 0.75 0 0 1 -0.6 1.374 A 3.25 3.25 0 0 1 3 18.75 v -16 Z M 19.5 1.5 V 15 H 6 c -0.546 0 -1.059 0.146 -1.5 0.401 V 2.75 c 0 -0.69 0.56 -1.25 1.25 -1.25 H 19.5 Z"
                  />
                  <path d="M 7 18.25 a 0.25 0.25 0 0 1 0.25 -0.25 h 5 a 0.25 0.25 0 0 1 0.25 0.25 v 5.01 a 0.25 0.25 0 0 1 -0.397 0.201 l -2.206 -1.604 a 0.25 0.25 0 0 0 -0.294 0 L 7.397 23.46 a 0.25 0.25 0 0 1 -0.397 -0.2 v -5.01 Z" />
                </svg>
              </View>

              <View>
                <Text style={styles.ownRepo}>Public</Text>
                <Text style={styles.textSecond}>
                  Anyone on the internet can see this repository. You choose who
                  can commit.
                </Text>
              </View>
            </View>
          </label>
          <View style={{ height: 15 }} />
          {/* private */}

          <label>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <View style={{ marginBottom: 10, paddingRight: 4 }}>
                <input
                  type="radio"
                  name={isPublicName}
                  value={"public"}
                  checked={radioCheck.public}
                  onChange={setRadioCheckfn}
                />
              </View>
              <View style={{ paddingRight: 4 }}>
                <svg width="32" height="32" fill="#b08800" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M 6 9 V 7.25 C 6 3.845 8.503 1 12 1 s 6 2.845 6 6.25 V 9 h 0.5 a 2.5 2.5 0 0 1 2.5 2.5 v 8 a 2.5 2.5 0 0 1 -2.5 2.5 h -13 A 2.5 2.5 0 0 1 3 19.5 v -8 A 2.5 2.5 0 0 1 5.5 9 H 6 Z m 1.5 -1.75 C 7.5 4.58 9.422 2.5 12 2.5 c 2.578 0 4.5 2.08 4.5 4.75 V 9 h -9 V 7.25 Z m -3 4.25 a 1 1 0 0 1 1 -1 h 13 a 1 1 0 0 1 1 1 v 8 a 1 1 0 0 1 -1 1 h -13 a 1 1 0 0 1 -1 -1 v -8 Z"
                  />
                </svg>
              </View>

              <View>
                <Text style={styles.ownRepo}>Private</Text>
                <Text style={styles.textSecond}>
                  You choose who can see and commit to this repository.
                </Text>
              </View>
            </View>
          </label>
          <View style={{ height: 15 }} />
        </View>
        {/* initialize this repo */}
        <Text style={styles.ownRepo}>Initialize this repository with:</Text>
        <Text style={styles.textFirst}>
          Skip this step if you’re importing an existing repository.
        </Text>
        {/* check box */}
        <View style={[styles.div, { marginBottom: 15 }]}>
          <View style={{ height: 10 }} />
          <View style={styles.bottomMargin}>
            <label>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ width: 20 }}>
                  <input
                    type="checkbox"
                    name={checkBox}
                    value={1}
                    onChange={(event) => {
                      console.log("event", event);
                    }}
                    style={{ marginLeft: 0 }}
                  />
                </View>
                <Text style={styles.ownRepo}>Add a README file</Text>
              </View>
            </label>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: 20 }} />
              <Text style={styles.textSecond}>
                This is where you can write a long description for your project.{" "}
                <CustomLink href="#">Learn More.</CustomLink>
              </Text>
            </View>
          </View>

          {/* add .git ignore */}

          <View style={styles.bottomMargin}>
            <label>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ width: 20 }}>
                  <input
                    type="checkbox"
                    name={checkBox}
                    value={1}
                    onChange={(event) => {
                      console.log("event", event);
                    }}
                    style={{ marginLeft: 0 }}
                  />
                </View>
                <Text style={styles.ownRepo}>Add .gitignore</Text>
              </View>
            </label>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: 20 }} />
              <Text style={styles.textSecond}>
                Choose which files not to track from a list of templates.{" "}
                <CustomLink href="#">Learn More.</CustomLink>
              </Text>
            </View>
          </View>

          {/* choose license */}

          <View style={styles.bottomMargin}>
            <label>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <View style={{ width: 20 }}>
                  <input
                    type="checkbox"
                    name={checkBox}
                    value={1}
                    onChange={(event) => {
                      console.log("event", event);
                    }}
                    style={{ marginLeft: 0 }}
                  />
                </View>
                <Text style={styles.ownRepo}>Choose a license</Text>
              </View>
            </label>
            <View style={{ flexDirection: "row" }}>
              <View style={{ width: 20 }} />
              <Text style={styles.textSecond}>
                A license tells others what they can and can't do with your
                code. <CustomLink href="#">Learn More.</CustomLink>
              </Text>
            </View>
          </View>
        </View>
        {/* create repository button */}
        <MouseOverButton
          mouseOverBackgroundColor={"#22863a"}
          backgroundColor={"#2ea44f"}
          style={{
            width: 170,
            height: 35,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: "#d1d5da",
          }}
        >
          <Text style={{ fontWeight: "500", color: "white" }}>
            Create repository
          </Text>
        </MouseOverButton>
        {/* <button style={{ width: 170, height: 35, backgroundColor: "#2ea44f" }}>
          <Text style={{ fontWeight: "500", color:"white" }}>Create repository</Text>
        </button> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  div: {
    borderBottomColor: "#eaecef",
    borderBottomWidth: 1,
    marginBottom: 32,
  },
  subheadDescription: {
    fontSize: 14,
    color: "#586069",
    lineHeight: 21,
    paddingBottom: 16,
  },
  ownRepo: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: "600",
  },
  textFirst: {
    fontSize: 14,
    lineHeight: 21,
    fontWeight: 400,
    color: "#586069",
  },
  textSecond: {
    fontSize: 12,
    lineHeight: 18,
    fontWeight: 400,
    color: "#586069",
  },
  selectBoxDiv: {
    height: 50,
    justifyContent: "center",
  },
  bottomMargin: {
    marginBottom: 16,
  },
});

export default App;
