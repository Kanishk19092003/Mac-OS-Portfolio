import './Dock.scss';

const Dock = () => {
  return (
    <footer className="dock">
      <div className="icon github">
        <img src="/assets/github.svg" alt="GitHub" />
      </div>
      <div className="icon mail">
        <img src="/assets/mail.svg" alt="Mail" />
      </div>
      <div className="icon calendar">
        <img src="/assets/calender.svg" alt="Calendar" />
      </div>
      <div className="icon note">
        <img src="/assets/note.svg" alt="Note" />
      </div>
      <div className="icon cli">
        <img src="/assets/cli.svg" alt="CLI" />
      </div>
      <div className="icon spotify">
        <img src="/assets/spotify.svg" alt="" />
      </div>
      <div className="icon pdf">
        <img src="/assets/pdf.svg" alt="" />
      </div>
      <div className="icon link">
        <img src="/assets/link.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
