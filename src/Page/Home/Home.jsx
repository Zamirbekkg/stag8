import React from 'react';
import '../Home/Home.css'
import logo from './logo.svg/Line.svg'
import LineLogo from './logo.svg/Line 2.svg'

const Home = () => {
    return (
        <div className='Ves'>
            <div className='Conreiner'>
                <div className='nomber'>
                    <p className='nomberP'>8 (812) 123-45-67    |    Работаем 7 дней в неделю    |    9:00 — 18:00  </p>
                </div>
                <div className='Reg'>
                    <p className='RegP'>Войти / Регистрация</p>
                </div>
          </div>

          <div className='LineUl'>
                <div className='porten'>
                    <p>PORTEN</p>
                </div>
            </div>

        <div className='imgF'>
            <img className='logoLine' src={logo} alt="" />
            <p className='LoremText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus interdum purus, est tortor pulvinar ut in. Fringilla a diam enim sed justo, sed iaculis sagittis. Tortor id eu interdum nec ut iaculis. Penatibus ullamcorper ultricies morbi ipsum sem metus pharetra, mi. Tortor nibh magna feugiat id nunc, dui nisl viverra.</p>
        </div> 
         
        <div>
        <div className='Sezon'>
            <div className='h3div'>
                <h3 className='h3text'>СЕЗОН 2020/21</h3>
            </div>
            <div className='Linediv'>
                <img className='LineLogo' src={LineLogo} alt="" />
            </div>
            <div className='Time'>
                <div className='Timecol1'>
                </div>
                <div className='Timecol2'>
                </div>
                <div className='Timecol3'>
                </div>
            </div>
        </div>
        <div className='imgKatalog'>
            <button className='Catalogbtn'></button>
        </div>
        </div>
            
        </div>
    );
}

export default Home;
