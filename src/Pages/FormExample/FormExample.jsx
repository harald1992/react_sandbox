import { useState } from "react";

export default function FormExample() {

    const [formData, setFormData] = useState({
        name: '',
        comment: '',
        employed: 'unemployed',
        gender: 'female',
        isJoinNewsletter: true,
    });

    function handleChange(e) {
        const { value, name, type, checked } = e.target;

        setFormData(previousValue => {
            return {
                ...previousValue,
                [name]: type === 'checkbox' ? checked : value,
            }

        });
    }

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formData);
    }


    return (
        <>
            <form onSubmit={handleSubmit} className="flex-column">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} />

                <br />

                <label htmlFor="comment">Comment</label>
                <textarea name="comment" id="comment" value={formData.comment} onChange={handleChange}></textarea>

                <br />

                <div className="flex-row">
                    <input type="radio" name="employed" id="fulltime" value="fulltime" onChange={handleChange} checked={formData.employed === 'fulltime'} />
                    <label htmlFor="fulltime">Full-time</label>

                    <input type="radio" name="employed" id="unemployed" value="unemployed" onChange={handleChange} checked={formData.employed === 'unemployed'} />
                    <label htmlFor="unemployed">Unemployed</label>
                </div>

                <br />

                <select name="gender" id="gender" value={formData.gender} onChange={handleChange} >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>

                </select>

                <br />

                <input type="checkbox" name="isJoinNewsletter" id="isJoinNewsletter" onChange={handleChange} checked={formData.isJoinNewsletter} />
                <label htmlFor="isJoinNewsletter">Join the newsletter</label>
                <hr />
                <button type="submit">Submit</button>
            </form>

            <hr />
            <br />
            <pre>{JSON.stringify(formData, null, 2)}</pre>
        </>
    )
}