import React from 'react'
import Navigation from './Navigation'
import { MdKeyboardArrowRight } from 'react-icons/md'

const DocumentInformation = ({ setSection }) => {
    return (
        <div className='w-full'>
            <h1 className='text-white text-lg text-center'>Document Upload (0'Level)</h1>
            <div className='mt-12 space-y-4 px-4'>
                <div className='flex justify-between items-center'>
                    <button 
                        className='flex items-center space-x-1 px-4 py-1 bg-[#00aeff] text-white rounded-sm'
                        onClick={() => setSection('document')}
                    >
                        <span>OK</span>
                        <MdKeyboardArrowRight size={25} />
                    </button>
                    <Navigation setSection={setSection} prev={'course'} next={'document'} />
                </div>
            </div>
        </div>
    )
}

export default DocumentInformation