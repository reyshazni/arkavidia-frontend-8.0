import Image from 'next/image'
import Countdown from '../../components/Icon/CountdownCard'
import Image1 from '../src/components/Images/Mask group.png'
import Image2 from '../src/components/Images/Mask group (1).png'

export default function About() {
  return (
    <>
      <div
        className="font-archivo border-4 border-black text-clip truncate overflow-hidden tracking-wider
        xl:text-[36px] "
      >
        CLOSE REGISTRATION CLOSE REGISTRATION CLOSE REGISTRATION CLOSE
        REGISTRATION
      </div>
      <div
        className="
        "
      >
        <Countdown date="" dateString="" title="" />
      </div>
      <div
        className="bg-black text-center
        xl:h-[104px]"
      >
        <button
          className="text-center mt-2 mb-4 px-[20px] py-[3px] text-[9px] font-medium text-white bg-red300 rounded-xl hover:bg-red200 hover:drop-shadow-lg transition-all active:bg-red400 
            xl:px-[160px] xl:py-[20px] xl:text-[16px]
            "
        >
          Register Now!
        </button>
      </div>
      <div className="flex">
        <div className="">
          <div className="mt-[120px]">
            <div
              className="bg-black text-white font-[archivo] rotate-[-4deg]
              xl:px-[130px] xl:w-[820px] xl:py-[7px] xl:text-[36px] "
            >
              ADAPTIVE COLLABORATION
            </div>
            <div
              className="bg-black text-white font-[archivo] rotate-[-1deg]
              xl:mt-[13px] xl:px-[100px] xl:w-[540px] xl:py-[7px] xl:text-[36px] "
            >
              TO ENCOUNTER
            </div>
            <div
              className="bg-black text-white font-[archivo] rotate-[-4deg]
              xl:ml-[80px] xl:mt-[-10px] xl:px-[130px] xl:w-[700px] xl:py-[7px] xl:text-[36px]"
            >
              DIGITAL DISRUPTION
            </div>
          </div>
          <div
            className="text-justify font-helvatica tracking-tighter
            xl:mt-[50px] xl:ml-[60px] xl:mr-[680px]"
          >
            Arkavidia merupakan acara IT tahunan yang diadakan oleh Himpunan
            Mahasiswa Informatika ITB. Dengan tema “Adaptive Collaboration to
            Encounter Digital Disruption”, Arkavidia 8.0 diharapkan akan lebih
            banyak individu sadar akan hak dan kewajibannya di dunia digital,
            sehingga dapat mewujudkan kemerdekaan digital bagi dirinya.
            Diharapkan dengan diadakannya acara ini, dapat memberikan manfaat
            bagi pelajar, civitas akademik, dan masyarakat umum seluruh
            Indonesia.
          </div>
        </div>
        <div className="">Carousell</div>
      </div>
      <div
        className="flex
        xl:mt-[50px]"
      >
        <div
          className="bg-[#FFEADF] border-4 border-black
          xl:h-[315px] xl:ml-[-4px]"
        >
          <div>
            <Image src={Image1} />
          </div>
        </div>
        <div
          className="bg-[#F43518] border-4 border-black
          xl:pt-[35px] xl:px-[32px] xl:h-[315px] xl:w-[400px] xl:ml-[12px]"
        >
          <div
            className="bg-[#FFEADF] border-4 border-black font-archivo text-center
            xl:h-[150px] xl:text-[72px]"
          >
            <div
              className="
              xl:mt-[20px]"
            >
              999
            </div>
          </div>
          <div
            className="text-white font-archivo text-center
            xl:text-[24px] xl:mt-[32px]"
          >
            PARTICIPANT
          </div>
          <div
            className="text-white font-varela text-center
            xl:text-[20px]"
          >
            FOR EACH YEAR
          </div>
        </div>
        <div
          className="bg-[#1F307C] border-4 border-black
          xl:pt-[35px] xl:px-[32px] xl:h-[315px] xl:w-[400px] xl:ml-[12px]"
        >
          <div
            className="bg-[#FFEADF] border-4 border-black font-archivo text-center
            xl:h-[150px] xl:text-[72px]"
          >
            <div
              className="
              xl:mt-[20px]"
            >
              999
            </div>
            <div
              className="text-white font-archivo text-center
              xl:text-[24px] xl:mt-[48px]"
            >
              ENTRANTS
            </div>
            <div
              className="text-white font-varela text-center
              xl:text-[20px]"
            >
              FOR EACH YEAR
            </div>
          </div>
        </div>
        <div
          className="bg-[#069154] border-4 border-black
          xl:pt-[35px] xl:px-[32px] xl:h-[315px] xl:w-[400px] xl:ml-[12px]"
        >
          <div
            className="bg-[#FFEADF] border-4 border-black font-archivo text-center
            xl:h-[150px] xl:text-[72px]"
          >
            <div
              className="
              xl:mt-[20px]"
            >
              999
            </div>
            <div
              className="text-white font-archivo text-center
            xl:text-[24px] xl:mt-[48px]"
            >
              PARTNERS
            </div>
            <div
              className="text-white font-varela text-center
            xl:text-[20px]"
            >
              FOR EACH YEAR
            </div>
          </div>
        </div>
        <div
          className="bg-[#FFEADF] border-4 border-black
          xl:h-[315px] xl:ml-[12px]"
        >
          <div
            className="
            xl:mt-[7px]"
          >
            <Image src={Image2} />
          </div>
        </div>
      </div>
    </>
  )
}
