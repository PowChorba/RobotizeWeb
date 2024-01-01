'use client'

import axios from "axios"
import Image from "next/image"
import { useState } from "react"
import { fechaNow, postArticle } from "../service/admin.service"
import { useRouter } from "next/navigation"


export default function AdminCreate(){
    const router = useRouter()

    const [article,setArticle] = useState({
        title: '',
        content: '',
        img: '',
        subtitle: '',
        date: '',
        tags: [],
        section: 'rpa',
        keytitle: '',
        pretitle: '',
        publico: false
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setArticle({
            ...article,
            [e.target.name]: e.target.value
        })
    }


    const handleImage = async (e: any) => {
        try {
          const file = e.target.files[0];
          const data = new FormData();
          data.append("file", file);
          data.append("upload_preset", "Robotize");
    
          const cloudinary = await axios.post('https://api.cloudinary.com/v1_1/powchorba/image/upload', data);
          setArticle({
            ...article,
            img: cloudinary.data?.secure_url,
          });
        } catch (error) {
          console.log(error, 'error');
        }
    };

    const handelSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        article.content = article.content.replaceAll('\n\n', '<br/><br/>')
        article.content = article.content.replaceAll('\n', '<br/><br/>')
        article.date = fechaNow()
        const submit = await postArticle(article)
        if (submit.status === 'ok'){
            router.push('/admin')
        }
        
    }


    const makeTextStrong = () => {
        const textarea = document.querySelector("textarea[name='content']") as HTMLTextAreaElement
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = textarea.value.slice(start, end);

        if (selectedText) {
            const newValue = 
                textarea.value.slice(0, start) +
                `<strong>${selectedText}</strong>` +
                textarea.value.slice(end);

            setArticle({
                ...article,
                content: newValue
            });
        }
    };

    const makeUnderline = () => {
        const textarea = document.querySelector("textarea[name='content']") as HTMLTextAreaElement
        if (!textarea) return;

        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = textarea.value.slice(start, end);

        if (selectedText) {
            const newValue = 
                textarea.value.slice(0, start) +
                `<u>${selectedText}</u>` +
                textarea.value.slice(end);

            setArticle({
                ...article,
                content: newValue
            });
        }
    };


    return(
        <section>
            
                    <form className="py-4 flex flex-col gap-4" onSubmit={handelSubmit}>
                        {/* Titulo */}
                        <h4>Titulo:</h4>
                        <textarea name='title'  value={article.title} cols={30} rows={2} onChange={handleChange} className="text-4xl lg:text-2xl font-bold text-center max-sm:text-2xl border-2 border-robotize p-2"/>
                        {
                            article.img === ''
                            ? <label htmlFor="inputTag"><span className="bg-robotize text-white text-center py-2 rounded-lg  cursor-pointer">Subir imagen</span><input id='inputTag' type="file" accept="image/jpeg, image/png" name="img"  onChange={handleImage} className="hidden"/></label>
                            : <><label htmlFor="inputTag"><span className="bg-robotize text-white text-center py-2 rounded-lg  cursor-pointer">Cambiar imagen</span><input id='inputTag' type="file" accept="image/jpeg, image/png" name="img"  onChange={handleImage} className="hidden"/></label><Image src={article.img} alt="asd" width={800} height={400} unoptimized className="max-sm:w-full py-2 mx-auto"/></>
                        }
                        <h4>Nota Completa:</h4>
                        <div className="flex gap-2">
                        <span onClick={makeTextStrong} className="bg-robotize text-white mt-2 px-4 py-2 rounded-lg w-1/12 max-sm:w-4/12 cursor-pointer">Negritas</span>
                        <span onClick={makeUnderline} className="bg-robotize text-white mt-2 px-4 py-2 rounded-lg w-1/12 max-sm:w-4/12 cursor-pointer">Subrayado</span>
                        </div>
                        <textarea name='content'  value={article.content} cols={30} rows={15} onChange={handleChange} className="border-2 border-robotize p-2"/>
                        
                        <br />
                        <button className="bg-robotize text-white w-1/6 max-sm:w-3/6 mx-auto py-2 rounded-lg">Modificar</button>
                    </form>
                
        </section>)
}