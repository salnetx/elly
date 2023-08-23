import Link from "next/link";
const Footer = () => {
  return (
    <>
      <div class="grid grid-cols-2 text-neutral-600 gap-8 pb-6">
        <Link href={'/'}><div className="col-span-1 text-right">Home</div></Link>
        <Link href={'/legal'}><div className="col-span-1">Legal</div></Link>
      </div>
    </>
  );
};

export default Footer;
