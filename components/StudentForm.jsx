import {useState} from "react";

const StudentForm = ({formData, setFormData}) => {
    const [previewUrl, setPreviewUrl] = useState(null);

    const changeInput = ({value, id}) => {
        formData[id] = value;
        setFormData({...formData})
    }


    const onImageChange = (e) => {
        const selectedImage = e.target.files[0];
        formData[e.target.id] = selectedImage;
        setFormData({...formData})

        // Preview image
        const reader = new FileReader();
        reader.onloadend = () => {
            setPreviewUrl(reader.result);
        };
        if (selectedImage) {
            reader.readAsDataURL(selectedImage);
        }
    }

    return (
        <div className="space-y-4 my-5">
            <div>
                <label htmlFor="StudentID" className='mb-2 block'>Student ID*</label>
                <input
                    value={formData.StudentID}
                    onChange={(e) => changeInput(e.target)}
                    className='appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline focus:ring-2'
                    type="number" name="StudentID" id="StudentID" placeholder="Student ID" required/>
            </div>

            <div>
                <label htmlFor="Name" className='mb-2 block'>Name* </label>
                <input
                    onChange={(e) => changeInput(e.target)}
                    value={formData.Name}
                    className='appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline focus:ring-2'
                    type="text" name="Name" id="Name" placeholder="Name" required/>
            </div>

            <div>
                <label htmlFor="DOB" className='mb-2 block'>Date of Birth* </label>
                <input
                    onChange={(e) => changeInput(e.target)}
                    value={formData.DOB}
                    className='appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline focus:ring-2'
                    type="date" name="DOB" id="DOB" placeholder="Date of birth" required/>
            </div>

            <div>
                <label htmlFor="Dept" className='mb-2 block'>Department* </label>
                <select
                    onChange={(e) => changeInput(e.target)}
                    value={formData.Dept}
                    name="Dept"
                    id="Dept"
                    className='border rounded w-full bg-white py-2 px-3 focus:outline-none focus:shadow-outline focus:ring-2'
                    required
                >
                    <option value="">Select Department</option>
                    <option value="CSE">CSE</option>
                    <option value="BBA">BBA</option>
                    <option value="LLB">LLB</option>
                </select>

            </div>
            <div>
                {
                    previewUrl ?
                        <img src={previewUrl} alt="Preview" className="mx-auto w-24 my-2 ring-3 rounded"/> :
                        formData.Image &&
                        < img src={formData.Image} alt="Preview" className="mx-auto w-24 my-2 ring-3 rounded"/>}

                <label htmlFor="Image" className='mb-2 block'>Image </label>
                <input
                    // onChange ={(e)=>changeInput(e.target)}
                    onChange={(e) => onImageChange(e)}
                    className='appearance-none border rounded w-full py-2 px-3 focus:outline-none focus:shadow-outline focus:ring-2'
                    type="file" name="Image" id="Image" accept='.png,.jpg,.jpeg' required={!formData.Image}/>
            </div>
        </div>);
};

export default StudentForm;