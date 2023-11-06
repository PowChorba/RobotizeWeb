'use client'

interface vTitle{
    title:string
    keytitle: string
}

export const CardTitle = ({title, keytitle}:vTitle) => (
    <>
      <h4 className="text-sm text-left pl-2 font-bold min-h-[40px] max-h-[40px] truncate-height"><span className="text-[#441eae]">{keytitle}</span>{' '}{title}</h4>
      <style jsx>{`
        .truncate-height {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      `}</style>
    </>
  );

  interface vSubTitle{
    subtitle:string
}

  export const CardBajada = ({subtitle}: vSubTitle) => (
    <>
      <p className="text-xs min-h-[50px] max-h-[50px] truncate-height items-center">{subtitle}
            </p>
      <style jsx>{`
        .truncate-height {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
      `}</style>
    </>
  );

  export const CardTitleRight = ({title, keytitle}:vTitle) => (
    <>
      <h4 className="text-sm truncate-height font-semibold"><span className="text-[#441eae]">{keytitle}</span>{' '}{title}</h4>
      <style jsx>{`
        .truncate-height {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      `}</style>
    </>
  );

  export const CardAdminCMSTitle = ({title}:{title:string}) => (
    <>
      <h4 className="text-sm truncate-height font-semibold cursor-pointer">{title}</h4>
      <style jsx>{`
        .truncate-height {
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          overflow: hidden;
        }
      `}</style>
    </>
  );
