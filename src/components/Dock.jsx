import "./Dock.scss";

const Dock = ({ setWindowsState }) => {
  return (
    <footer className="dock">
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, github: true }));
        }}
        className="icon github"
      >
        <img src="/assets/github.svg" alt="GitHub" />
      </div>
      <div
        onClick={() =>
          window.open("https://mail.google.com/mail/?view=cm&fs=1&to=kanishkyadav141@gmail.com","_blank",)}
        className="icon mail">
        <img src="/assets/mail.svg" alt="Mail" />
      </div>
      <div
        onClick={()=>{window.open("https://calendar.google.com/","_blank")}}
        className="icon calendar"
      >
        <img src="/assets/calender.svg" alt="Calendar" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, note: true }));
        }}
        className="icon note"
      >
        <img src="/assets/note.svg" alt="Note" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, cli: true }));
        }}
        className="icon cli"
      >
        <img src="/assets/cli.svg" alt="CLI" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, spotify: true }));
        }}
        className="icon spotify"
      >
        <img src="/assets/spotify.svg" alt="" />
      </div>
      <div
        onClick={() => {
          setWindowsState((state) => ({ ...state, resume: true }));
        }}
        className="icon pdf"
      >
        <img src="/assets/pdf.svg" alt="" />
      </div>
      <div
        onClick={() => {
          window.open("https://www.linkedin.com/in/kanishkyadav19/", "_blank");
        }}
        className="icon link"
      >
        <img src="/assets/link.svg" alt="" />
      </div>
    </footer>
  );
};

export default Dock;
