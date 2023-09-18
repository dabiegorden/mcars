
import React from 'react';
import Image from 'next/image';

import { Hero, SearchBar, CustomFilter, CarCard, ShowMore } from '@/components';
import { fetchCars } from '@/utils';
import { fuels, yearsOfProduction } from '@/constants';
import { HomeProps } from '@/types';

export default async function page({ searchParams }: HomeProps) {
const allCars = await fetchCars({ manufacturer: searchParams.manufacturer || "", year: searchParams.year || 2022, fuel: searchParams.fuel || "", limit: searchParams.limit || 10, model: searchParams.model || "", });
console.log(allCars);

const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
        <Hero />

        {/* car catalogue page */}
        <div className="mt-12 padding-x padding-y max-width" id="discover">
            <div className="home__text-container">
                <h1 className="text-4xl font-extrabold">
                   Car Catalogue
                </h1>
                <p>Explore The cars you might like</p>
            </div>

            {/* filters */}
            <div className="home__filters">
                <SearchBar />                

                <div className="home__filter-container">
                    <CustomFilter title="Fuel" options={fuels}/>
                    <CustomFilter title="Year" options={yearsOfProduction}/>
                </div>
            </div>

            {/* display the cars */}
            {!isDataEmpty ? (
                <section>
                    <div className="home__cars-wrapper">
                        {allCars?.map((car) => (
                            <CarCard car={car}/>
                        ))}
                    </div>
                    <ShowMore 
                        pageNumber={(searchParams.limit || 10) / 10}
                        isNext={(searchParams.limit || 10) > allCars.length}
                    />
                </section>
            ): (
                <div className="home__error-container">
                    <h2 className="text-black text-xl font-bold">Opps! no results</h2>
                    {allCars?.message}
                </div>
            )}
        </div>
    </main>
  )
}
