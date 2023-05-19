import React from 'react';

interface IAppProps {
  bgColor?: string | undefined;
}

export const App: React.FC<IAppProps> = ({ bgColor }) => {
  const styles: any = {
    root: {
      padding: 0,
      margin: 0,
      boxSizing: 'border-box',
      fontFamily: 'Inter, sans-serif',
      backgroundColor: '#ffffff',
      color: 'white',
    },
    container: {
      maxWidth: '1000px',
      width: '90%',
      margin: '0 auto',
      display: 'grid',
      padding: '5rem',
      backgroundColor: bgColor ? bgColor : 'black',
      gridTemplateColumns: '1fr 1fr',
      gap: '4rem',
    },
    profile: {
      gridColumn: '1 / -1',
      marginBottom: '2rem',
    },
    group1: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5rem',
    },
    group2: {
      display: 'flex',
      flexDirection: 'column',
      gap: '5rem',
    },
    group3: {
      maxWidth: '700px',
      width: '100%',
      margin: '0 auto',
      gridColumn: '1 / -1',
      display: 'flex',
      flexDirection: 'row',
      gap: '5rem',
    },
    group3Item: {
      flex: 1,
    },
    profileContainer: {
      display: 'flex',
      gap: '2rem',
    },
    profileImg: {
      maxWidth: '250px',
    },
    profileFirstName: {
      color: 'white',
      fontWeight: 200,
      fontSize: 'clamp(2rem, 8vw, 4rem)',
      textTransform: 'uppercase',
      display: 'block',
      marginBottom: '-0.8rem',
    },
    profileLastName: {
      color: '#ff7613',
      fontWeight: 700,
      fontSize: 'clamp(2.5rem, 15vw, 7rem)',
      textTransform: 'uppercase',
      display: 'block',
    },
    profileTitle: {
      fontSize: '1.5rem',
      fontWeight: 400,
      textTransform: 'uppercase',
    },
    description: {
      marginTop: '1rem',
      fontSize: '1.5rem',
      fontWeight: 400,
      color: '#727171',
    },
    title: {
      color: '#ff7613',
      fontWeight: 700,
      fontSize: '2rem',
      textTransform: 'uppercase',
    },
    itemPreTitle: {
      fontSize: '1.4rem',
      color: '#727171',
      fontWeight: 300,
    },
    itemTitle: {
      fontSize: '1.6rem',
      color: 'white',
      fontWeight: 500,
      margin: '0.8rem 0',
    },
    itemSubtitle: {
      fontSize: '1.4rem',
      color: '#727171',
      fontWeight: 400,
    },
    skillsList: {
      marginTop: '1rem',
      marginLeft: '2rem',
      lineHeight: 2,
    },
    refItem: {
      marginTop: '2rem',
    },
    refName: {
      fontSize: '1.6rem',
      fontWeight: 700,
    },
    eduItem: {
      marginTop: '2rem',
    },
    expItem: {
      marginTop: '2rem',
    },
    awardsItem: {
      marginTop: '2rem',
    },
    interestItems: {
      marginTop: '2rem',
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'wrap',
      gap: '2rem',
    },
    interestItem: {
      fontSize: '1.5rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '0.5rem',
      color: '#727171',
    },
    socialItems: {
      marginTop: '2rem',
    },
    socialItem: {
      marginTop: '1.5rem',
      fontSize: '1.5rem',
      display: 'flex',
      gap: '0.5rem',
      alignItems: 'center',
      justifyContent: 'flex-start',
      color: '#727171',
    },
    hr: {
      gridColumn: '1 / -1',
      width: '80%',
      margin: '0 auto',
      marginTop: '5rem',
      marginBottom: '1rem',
      border: 'none',
      borderTop: '2px solid rgba(128, 128, 128, 0.229)',
    },
  };
  return (
    <div style={styles.root}>
      <div style={styles.container}>
        <div style={styles.profile}>
          <div style={styles.profileContainer}>
            <div style={styles.profileImg}>
              {/* <img
                src="./images/profileImage.jpg"
                style={{ borderRadius: '50%' }}
              /> */}
            </div>
            <div>
              <h1 style={styles.profileFirstName}>Amit</h1>
              <h1 style={styles.profileLastName}>Kumar</h1>
              <p style={styles.profileTitle}>
                Full stack javascript developer (Node,React)
              </p>
              <p style={styles.description}>
                Innovative, 1+ years of work exprience,strong in development and
                integration with intuitive problem solving skills.
              </p>
              {/* <a class="downloadBtn" href="./cv.pdf" download="Resume.pdf">Download Resume</a> */}
            </div>
          </div>
        </div>
        <div style={styles.group1}>
          <div style={styles.skills}>
            <h3 style={styles.title}>Expertise</h3>
            <ul style={styles.skillsList}>
              <li>JavaScript</li>
              <li>React Native</li>
              <li>React JS</li>
              <li>MERN STACK</li>
              <li>Problem Solving</li>
            </ul>
          </div>
          <div style={styles.ref}>
            <h3 style={styles.title}>Projects</h3>
            <div style={styles.refItem}>
              <h4 style={styles.refName}>MERN</h4>
              <p style={styles.description}>
                Web app made with using concepts like MiddleWare, MongoDB Atlas,
                Form Validation, JWT Token, Cookies, Heroku, Integration of
                react libraries, Routes, BcryptJS and many more.
              </p>
            </div>
            <div style={styles.refItem}>
              <h4 style={styles.refName}>ReactJS-Builds</h4>
              <p style={styles.description}>
                Worked on different different projects using firebase, firebase
                DB, integrating react libraries, firebase google authentication,
                email-password integration with firebase and uses react advance
                concepts.
              </p>
            </div>
            <div style={styles.refItem}>
              <h4 style={styles.refName}>Ecommerce-ReactNative</h4>
              <p style={styles.description}>
                Fully functional react native Ecommerce application, that run on
                both IOS and Android, using Expo-Cli firebase auth and firebase
                DB.
              </p>
            </div>
            <div style={styles.refItem}>
              <h4 style={styles.refName}>and many more...</h4>
            </div>
          </div>
          <div style={styles.edu}>
            <h3 style={styles.title}>Education</h3>
            <div style={styles.eduItem}>
              <p style={styles.itemPreTitle}>2018-2022</p>
              <h4 style={styles.itemTitle}>B.tech</h4>
              <p style={styles.itemSubtitle}>
                Guru Gobind Singh Indraprastha University
              </p>
            </div>
          </div>
        </div>
        <div style={styles.group2}>
          <div style={styles.exp}>
            <h3 style={styles.title}>Experience</h3>
            <div style={styles.expItem}>
              <p style={styles.itemPreTitle}>Jul 2022 - present</p>
              <h4 style={styles.itemTitle}>Functionary Labs Pvt Ltd.</h4>
              <p style={styles.itemSubtitle}>Product Engineer</p>
            </div>
            <div style={styles.expItem}>
              <p style={styles.itemPreTitle}>May 2022 - Jul 2022</p>
              <h4 style={styles.itemTitle}>Proffus Pvt Ltd.</h4>
              <p style={styles.itemSubtitle}>React Developer</p>
            </div>
            <div style={styles.expItem}>
              <p style={styles.itemPreTitle}>Jan 2022 - Feb 2022</p>
              <h4 style={styles.itemTitle}>Seekamentor</h4>
              <p style={styles.itemSubtitle}>React Developer</p>
            </div>
          </div>
          <div style={styles.awards}>
            <h3 style={styles.title}>ACHIEVEMENTS</h3>
            <div style={styles.awardsItem}>
              <h4 style={styles.itemTitle}>Multiple Hackathon Winner.</h4>
            </div>
            <div style={styles.awardsItem}>
              <h4 style={styles.itemTitle}>4 star at CodeChef.</h4>
            </div>
          </div>
          <div style={styles.interest}>
            <h3 style={styles.title}>Interests</h3>
            <div style={styles.interestItems}>
              <div style={styles.interestItem}>
                <span>Web Apps</span>
              </div>
              <div style={styles.interestItem}>
                <span>DSA</span>
              </div>
              <div style={styles.interestItem}>
                <span>MERN Stack</span>
              </div>
              <div style={styles.interestItem}>
                <span>React</span>
              </div>
            </div>
          </div>
        </div>
        <hr style={styles.hr} />
        <div style={styles.group3}>
          <div style={styles.contact}>
            <h3 style={styles.title}>Contact</h3>
            <div style={styles.contactInfo}>
              <p style={styles.description}>Delhi, India</p>
              <p style={styles.description}>mern.amitkumar@gmail.com</p>
            </div>
          </div>
          <div style={styles.social}>
            <h3 style={styles.title}>Socials</h3>
            <div style={styles.socialItems}>
              <a
                href="https://github.com/amit-g0swami"
                target="_b"
                style={styles.socialItem}
              >
                <i className="fab fa-github"></i>
                <span>Github</span>
              </a>
              <a
                href="https://www.linkedin.com/in/amit-kumar-17ab931b8"
                target="_b"
                style={styles.socialItem}
              >
                <i className="fab fa-linkedin"></i>
                <span>LinkedIn</span>
              </a>
              <a
                href="https://www.hackerrank.com/mern_amitkumar"
                target="_b"
                style={styles.socialItem}
              >
                <i className="fab fa-hackerrank"></i>
                <span>HackerRank</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
