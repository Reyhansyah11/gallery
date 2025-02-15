

const Footer = () => {
  return (
    <footer className="bg-slate-200 text-black font-semibold py-4 w-full">
      <div className="container mx-auto text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
