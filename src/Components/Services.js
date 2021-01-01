import React, { Component } from 'react'
import Title from "./Title"
import {FaCocktail, FaHiking, FaShuttleVan,} from 'react-icons/fa'
import {WiDaySnowWind} from 'react-icons/wi'

export default class Services extends Component {
    state={
        services:[
            {
                icon:<FaCocktail />,
                title:"نوشیدنی رایگان در تورها",
                info: "چیزهای کوچیکی در هر سفر، در هر تور، در هر تجربه ی جدیدی وجود دارند که آن تجربه را دلپذیر و به یاد ماندنی می کنند! شاید پذیرایی با یک نوشیدنی رایگان امر مهمی به نظر نیاید ولی باعث شود تجربه سفر بری شما خوشایندتر شود و این هدف ماست! "
            },
            {
                icon:<FaHiking />,
                title:"پیاده روی های بی انتها",
                info: "کلاردشت با داشتن مناظری بدیع و آب و هوایی سالم و پاکیزه، مکانی رویایی برای پیاده روی های طولانیست ! این فرصت را از خود دریغ نکنید"
            },
            {
                icon:<FaShuttleVan />,
                title:"ترنسفر رایگان",
                info: "سفر هر چقدر هر لذت بخش و روح افزا باشد، باز هم دردسرهایی دارد که ممکن است کمی باعث زحمت مسافران شود. یکی از این دردسرهای کوچک، جابجایی های در حین سفر است. ما سعی کرده ایم با فراهم آوردن امکان ترنسفر رایگان، انین دردسر کوچک را هم از سفر شما حذف کنیم "
            },
            {
                icon:<WiDaySnowWind />,
                title:"آب و هوای بهشتی",
                info: "آب و هوای کلاردشت کاملا منحصر به فرد است. متفاوت با آنچه در شمال کشور تاکنون دیده اید. هوایی روح بخش و خنک در تابستان و معتدل در زمستان، شرایط بی نظیری را از نظر آب و هوایی در کلاردشت رقم زده است. خودتان تجربه کنی"
            }
            ]
    }
    render() {
        return (
            <section className="services">
                <Title title="خدمات" />
                ,<div className="services-center">
                    {this.state.services.map((item,index) => {
                        return (<article key={index} className="service">
                            <span>{item.icon}</span>
                            <h6>{item.title}</h6>
                            <p>{item.info}</p>
                        </article>
                        )
                    })}
            </div>
            </section>
        )
    }
}
