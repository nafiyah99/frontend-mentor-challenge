import productDesktop from '/images/image-product-desktop.jpg';
import productMobile from '/images/image-product-mobile.jpg';
import './App.css';

function App() {
  return (
    <>
      <section className="flex rounded-xl bg-[#ffffff]">
        <picture>
          <source media="(max-width: 767px)" srcSet={productMobile} />
          <source media="(min-width: 768px)" srcSet={productDesktop} />
          <img src={productDesktop} alt="Product Image" />
        </picture>
        <article className="text-left p-5">
          <p className="text-[14px] text-[#6C7289]">P E R F U M E</p>
          <h1 className="title text-3xl py-3 text-black"><b>Gabrielle Essence Eau De Perfume</b></h1>
          <p className="text-[14px] tracking-wide leading-5 text-[#6C7289] font-medium">A floral, solar and voluptuous interpretation comsoped bt Oliver Polge, Perfumer-Creator for the House of CHANEL.</p>
          <div className="flex justify-start items-center gap-5 py-5">
            <span className="price text-2xl text-[#3C8067]"><b>$149.99</b></span>
            <span className="text-xs text-[#6C7289] line-through">$169.99</span>
          </div>
          <button className="flex items-center justify-center gap-2 bg-[#3C8067] focus:outline-none hover:bg-[#439272] active:bg-[#1a4031] text-white py-3 px-12 rounded-lg">
            <svg className="inline-block" width="15" height="16" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.383 10.388a2.397 2.397 0 0 0-1.518-2.222l1.494-5.593a.8.8 0 0 0-.144-.695.8.8 0 0 0-.631-.28H2.637L2.373.591A.8.8 0 0 0 1.598 0H0v1.598h.983l1.982 7.4a.8.8 0 0 0 .799.59h8.222a.8.8 0 0 1 0 1.599H1.598a.8.8 0 1 0 0 1.598h.943a2.397 2.397 0 1 0 4.507 0h1.885a2.397 2.397 0 1 0 4.331-.376 2.397 2.397 0 0 0 1.12-2.021ZM11.26 7.99H4.395L3.068 3.196h9.477L11.26 7.991Zm-6.465 6.392a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Zm6.393 0a.8.8 0 1 1 0-1.598.8.8 0 0 1 0 1.598Z"
                fill="#FFF"
              />
            </svg>
            Add to cart
          </button>
        </article>
      </section>
    </>
  );
}

export default App;
