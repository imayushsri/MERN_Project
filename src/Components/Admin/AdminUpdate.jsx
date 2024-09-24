import React from 'react';
import { useForm } from 'react-hook-form';    // Form Validation
import { yupResolver } from '@hookform/resolvers/yup';   // Form Validation
import * as yup from 'yup';   // Form Validation

const schema = yup
    .object()
    .shape({
        name: yup.string().required().min(2).max(30),
        email: yup.string().required().email(),
        // contact: yup.string().required(),
        password: yup.string().required(),
        // location: yup.string().required(),
        image: yup.mixed().required()
    })


const AdminUpdate = () => {

    // form validation useform Hook
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    const handleData = async (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('email', data.email);
        formData.append('contact', data.contact);
        formData.append('password', data.password);
        formData.append('location', data.location);
        formData.append('image', data.logo[0]);
    }


    return (
        <>
            <div className="form">
                <div className="form_icon">
                    <img src="../public/img/icon/admin.png" height='80px' />
                </div>
                <h2 className='form_h2'>Admin Update Profile</h2>
                <form onSubmit={handleSubmit(handleData)}>
                    {/* First row: Name and Email */}
                    <div className="form-row">
                        <div>
                            <label className="ms-1 mb-1">Name: </label>
                            <input {...register('name')} className='form_input' type="text" name="name" placeholder='Enter Your Name' />
                            {errors.name?.message && <span className='err_span'>{errors.name?.message}</span>}
                        </div>
                        <div>
                        <label className="ms-1 mb-1">Email: </label>
                            <input {...register('email')} className='form_input' type="text" name="email" placeholder='Enter Your Email'/>
                            {errors.email?.message && <span className='err_span'>{errors.email?.message}</span>}
                        </div>
                    </div>

                    {/* Second row: Contact and Password */}
                    <div className="form-row">
                        <div>
                        <label className="ms-1 mb-1">Password: </label>
                            <input {...register('password')} className='form_input' type="password" name="password" placeholder='Enter Password' />
                            {errors.password?.message && <span className='err_span'>{errors.password?.message}</span>}
                        </div>
                        <div>
                        <label className="ms-1 mb-1">Image: </label>
                            <input {...register('image')} className='form_input form_logo' type="file" name="image" accept="image/*" />
                            {errors.image?.message && <span className='err_span'>{errors.image?.message}</span>}
                        </div>
                    </div>
                    {/* Submit Button */}
                    <div>
                        <input type='submit' className='form_button' value='Update Profile' />
                    </div>
                </form>
            </div>
        </>
    )
}

export default AdminUpdate
