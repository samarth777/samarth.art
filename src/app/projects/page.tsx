import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import Project from '@/components/Project';

function Projects() {
  const projects = [
    {
      imageSrc: 'https://media.discordapp.net/attachments/961586736109076530/1131222608097058836/screenshot-2022-05-17-140517-1256x588.png?width=1268&height=593',
      title: 'Handwriter -Convert Typed Text Into Handwriting',
      desc: 'Check out www.handwriter.in to convert text to handwriting! You can use it for personalised letters, assignments and so much more!',
      link: 'https://www.handwriter.in',
    },
    {
      imageSrc: 'https://www.gitadaily.in/images/bhagavadgita-6.jpg',
      title: 'GITA-DAILY: Your Personal Bhagavad Gita',
      desc: 'Gita-Daily is a non-profit WhatsApp service that shares this eternal knowledge through bite-sized daily messages that contain not only the shlok but also its commentary, translation and word-by-word meaning. Users who opt-in to Gita-Daily receive this message at 5:00 AM and start their day with a feeling of blissfulness :)',
      link: 'https://www.gitadaily.in/'
    },
    {
        imageSrc: 'https://www.gitadaily.in/images/bhagavadgita-6.jpg',
        title: 'MedMaster',
        desc: 'MedMaster is a micro-pharmacy(medicine vending machine) that has all kinds of OTC and emergency medicines. It can be placed at places like apartments, communities etc. which you can access much more faster and get the medicines immediately dispensed. You can also directly upload your prescriotion and MedMaster dispensed those medicines.',
        link: 'https://github.com/samarth777/MedMaster'
      },
  ];

  return (
    <div>
      <NavBar />
      <h1 className="text-4xl font-bold text-center">PROJECTS</h1>
      <div className="h-screen flex flex-col justify-evenly items-center p-2">
        {projects.map((project, index) => (
          <Project
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            desc={project.desc}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Projects;
