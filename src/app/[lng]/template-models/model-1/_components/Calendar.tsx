export function Calendar(){
    return (
        <>
        <div className="mt-3 md:mt-3">
            <div className="relative flex flex-col md:flex-row w-[calc(100%-1rem)] mx-auto max-w-375 gap-10 p-2 md:p-3 bg-white rounded-[30px]">
                <div className="md:w-[50%]">
                    <iframe src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3unVsoxFsMTWM5z7zPFwx2Bf2rTpvJVdy16iH3rMn0gpnCO0ZrSflHsx54KXOTBjndINcMxHN6?gv=true"  width="100%" height="600"></iframe>
                </div>
                <div className="flex flex-col md:w-[50%]">
                    <div className="flex flex-col gap-5 p-10 bg-white">
                        <div>
                            <h1 className="text-6xl md:text-8xl font-grandHotel text-[#D20A2E]">
                            Scheduling
                            </h1>
                            <p className="text-sm text-gray-400 font-light mt-1">
                            Faça sua agenda em poucos cliques
                            </p>
                        </div>

                        <hr className="border-stone-100" />

                        <form
                            action="https://formsubmit.co/your@email.com"
                            method="POST"
                            className="flex flex-col gap-4"
                        >
                            <input type="text" name="_honey" className="hidden" />
                            <input type="hidden" name="_next" value="https://yourdomain.co/thanks.html" />
                            <input type="hidden" name="_subject" value="Nova submissão!" />
                            <input type="hidden" name="_template" value="table" />

                            <div className="flex flex-col gap-1">
                            <label className="text-[11px] font-medium tracking-widest uppercase text-gray-300">Nome</label>
                            <input
                                type="text"
                                name="name"
                                placeholder="Seu nome completo"
                                required
                                className="w-full px-4 py-2.5 text-sm text-gray-800 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#D20A2E] focus:bg-white transition-all placeholder:text-gray-300"
                            />
                            </div>

                            <div className="flex flex-col gap-1">
                            <label className="text-[11px] font-medium tracking-widest uppercase text-gray-300">Email</label>
                            <input
                                type="email"
                                name="email"
                                placeholder="seu@email.com"
                                required
                                className="w-full px-4 py-2.5 text-sm text-gray-800 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#D20A2E] focus:bg-white transition-all placeholder:text-gray-300"
                            />
                            </div>

                            <div className="flex flex-col gap-1">
                            <label className="text-[11px] font-medium tracking-widest uppercase text-gray-300">Mensagem</label>
                            <textarea
                                name="message"
                                placeholder="Como posso te ajudar?"
                                maxLength={100}
                                rows={4}
                                className="w-full px-4 py-2.5 text-sm text-gray-800 bg-stone-50 border border-stone-200 rounded-xl outline-none focus:border-[#D20A2E] focus:bg-white transition-all placeholder:text-gray-300 resize-none"
                            />
                            </div>

                            <button
                            type="submit"
                            className="self-start px-7 py-3 bg-[#D20A2E] text-white text-sm font-medium tracking-wide rounded-full hover:bg-[#b00826] active:scale-95 transition-all"
                            >
                            Enviar →
                            </button>
                        </form>

                        <hr className="border-stone-100" />

                        <div>
                            <p className="text-[11px] font-medium tracking-widest uppercase text-gray-300 mb-3">
                            Ou nos contate por
                            </p>
                            <div className="flex gap-3">
                            <div className="w-10 h-10 rounded-full border border-stone-200 bg-stone-50 flex items-center justify-center hover:border-[#D20A2E] hover:bg-red-50 transition-all cursor-pointer">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" fill="#D20A2E"/>
                                <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.978-1.302A9.96 9.96 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18a7.952 7.952 0 01-4.049-1.107l-.29-.173-3.013.789.803-2.928-.19-.3A7.963 7.963 0 014 12c0-4.418 3.582-8 8-8s8 3.582 8 8-3.582 8-8 8z" fill="#D20A2E"/>
                                </svg>
                            </div>

                            <div className="w-10 h-10 rounded-full border border-stone-200 bg-stone-50 flex items-center justify-center hover:border-[#D20A2E] hover:bg-red-50 transition-all cursor-pointer">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <rect x="2" y="2" width="20" height="20" rx="6" stroke="#D20A2E" strokeWidth="1.5"/>
                                <circle cx="12" cy="12" r="4" stroke="#D20A2E" strokeWidth="1.5"/>
                                <circle cx="17.5" cy="6.5" r="1" fill="#D20A2E"/>
                                </svg>
                            </div>

                            <div className="w-10 h-10 rounded-full border border-stone-200 bg-stone-50 flex items-center justify-center hover:border-[#D20A2E] hover:bg-red-50 transition-all cursor-pointer">
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                <rect x="2" y="4" width="20" height="16" rx="3" stroke="#D20A2E" strokeWidth="1.5"/>
                                <path d="M2 8l10 7 10-7" stroke="#D20A2E" strokeWidth="1.5" strokeLinejoin="round"/>
                                </svg>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}