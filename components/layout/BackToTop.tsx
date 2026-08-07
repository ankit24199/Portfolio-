"use client";
import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const h = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  if (!visible) return null;

  return (
    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} aria-label="Back to top"
      style={{position:"fixed",bottom:"2rem",right:"1.25rem",zIndex:100,width:44,height:44,borderRadius:"50%",background:"var(--accent)",border:"none",cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center",color:"#fff",transition:"transform .2s,box-shadow .2s",boxShadow:"0 4px 16px var(--glow)"}}
      onMouseEnter={e=>{e.currentTarget.style.transform="translateY(-3px) scale(1.05)";e.currentTarget.style.boxShadow="0 8px 24px var(--glow)";}}
      onMouseLeave={e=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.boxShadow="0 4px 16px var(--glow)";}}
    >
      <FiArrowUp size={18}/>
    </button>
  );
}
