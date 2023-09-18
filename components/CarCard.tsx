"use client";

import React, {useState} from 'react';
import Image from 'next/image';
import { CarProps } from '@/types';

import carImage from "../public/hero.png";
import steeringImage from "../public/steering-wheel.svg";
import gasImage from "../public/gas.svg";
import tireImage from "../public/tire.svg";
import rightArrorImage from "../public/right-arrow.svg";

import { CarDetails, CustomButton } from '.';
import { calculateCarRent, generateCarImageUrl } from '@/utils';

interface CarCardProps {
  car: CarProps;
}

const CarCard = ({ car }:CarCardProps) => {
  const { city_mpg, year, make, model, transmission, drive } = car;

  const carRent = calculateCarRent(city_mpg, year);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>

    <p className='flex mt-6 text-[32px] leading-[38px] font-extrabold'>
        <span className='self-start text-[14px] leading-[17px] font-semibold'>$</span>
        {carRent}
        <span className='self-end text-[14px] leading-[17px] font-medium'>/day</span>
      </p>

      <div className='relative w-full h-40 my-3 object-contain'>
        <Image src={generateCarImageUrl(car)} alt='car model' fill priority className="object-contain"/>
      </div>

      <div className="relative flex w-full mt-2">
          <div className="flex group-hover:invisible w-full justify-between text-grey">
              <div className="flex flex-col justify-center items-center gap-2">
              <Image src={steeringImage} width={20} height={20} alt='steering wheel' />
              <p className='text-[14px] leading-[17px]'>
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
              </div>
          </div>

          <div className="flex group-hover:invisible w-full justify-between text-grey">
              <div className="flex flex-col justify-center items-center gap-2">
              <Image src={tireImage} width={20} height={20} alt="seat" />
                <p className="car-card__icon-text">{drive.toUpperCase()}</p>
              </div>
          </div>

          <div className="flex group-hover:invisible w-full justify-between text-grey">
              <div className="flex flex-col justify-center items-center gap-2">
              <Image src={gasImage} width={20} height={20} alt="seat" />
              <p className="car-card__icon-text">{city_mpg} MPG</p>
            </div>
          </div>

          {/* button */}
          <div className="car-card__btn-container">
          <CustomButton
            title='View More'
            containerStyles='w-full py-[16px] rounded-full bg-primary-blue'
            textStyles='text-white text-[14px] leading-[17px] font-bold'
            rightIcon={rightArrorImage}
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CarDetails isOpen={isOpen} closeModal={() => setIsOpen(false)} car={car} />
    </div>
  )
}

export default CarCard;