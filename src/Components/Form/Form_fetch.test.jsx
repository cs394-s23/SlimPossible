import { it, describe, expect, test, vi } from "vitest";
import createFetchMock from 'vitest-fetch-mock';
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SearchForm from "./Form";
import Homepage from "../homepage/Homepage";
import { BrowserRouter } from "react-router-dom";


const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

// Some helper functions to mock fetch
function APIRequest(who) {

    if (who === "api.nal.usda"){
  
      const params = new URLSearchParams({
        api_key: '7PjqZ2PBp4plWIxuk3AtA6KUTsYooEKx9ospWyLG',
        query: 'egg',
        pageSize: 50,
        pageNumber: 1,
        brandOwner: '',
      });
  
      return fetch(`https://api.nal.usda.gov/fdc/v1/foods/search?${params}`).then((res) => res.json());
    } else {
      return "no argument provided"
    }
  }

describe('testing usda api', () => {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it('calls usda and it works', async () => {
    fetch.mockResponseOnce(JSON.stringify({ data: 'egg with milk' }));

    //assert on the response
    const res = await APIRequest('api.nal.usda');
    expect(res.data).toEqual('egg with milk');

    //assert on the times called and arguments given to fetch
    const params = new URLSearchParams({
      api_key: '7PjqZ2PBp4plWIxuk3AtA6KUTsYooEKx9ospWyLG',
      query: 'egg',
      pageSize: 50,
      pageNumber: 1,
      brandOwner: '',
    });


    expect(fetch.requests().length).toEqual(1);
    expect(fetch.requests()[0].url).toEqual(`https://api.nal.usda.gov/fdc/v1/foods/search?${params}`);
  });

  it("Search egg, and it returns 50 egg data blocks", async () => {
    render(
      <BrowserRouter>
        <SearchForm />
      </BrowserRouter>
    );

    // Please shrink the data types to see the rest of the code
    const testData = {
        foods: [
            {
                "fdcId": 747997,
                "description": "Eggs, Grade A, Large, egg white",
                "commonNames": "",
                "additionalDescriptions": "",
                "dataType": "Foundation",
                "ndbNumber": 1124,
                "publishedDate": "2019-12-16",
                "foodCategory": "Dairy and Egg Products",
                "mostRecentAcquisitionDate": "2019-07-08",
                "allHighlightFields": "",
                "score": 336.26437,
                "microbes": [],
                "foodNutrients": [
                    {
                        "nutrientId": 2048,
                        "nutrientName": "Energy (Atwater Specific Factors)",
                        "nutrientNumber": "958",
                        "unitName": "KCAL",
                        "derivationCode": "NC",
                        "derivationDescription": "Calculated",
                        "derivationId": 49,
                        "value": 55,
                        "foodNutrientSourceId": 2,
                        "foodNutrientSourceCode": "4",
                        "foodNutrientSourceDescription": "Calculated or imputed",
                        "rank": 290,
                        "indentLevel": 1,
                        "foodNutrientId": 13338453
                    },
                    {
                        "nutrientId": 2047,
                        "nutrientName": "Energy (Atwater General Factors)",
                        "nutrientNumber": "957",
                        "unitName": "KCAL",
                        "derivationCode": "NC",
                        "derivationDescription": "Calculated",
                        "derivationId": 49,
                        "value": 52,
                        "foodNutrientSourceId": 2,
                        "foodNutrientSourceCode": "4",
                        "foodNutrientSourceDescription": "Calculated or imputed",
                        "rank": 280,
                        "indentLevel": 1,
                        "foodNutrientId": 13338551
                    },
                    {
                        "nutrientId": 1166,
                        "nutrientName": "Riboflavin",
                        "nutrientNumber": "405",
                        "unitName": "MG",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 0.391,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 6500,
                        "indentLevel": 1,
                        "foodNutrientId": 8526264,
                        "dataPoints": 24,
                        "min": 0.302,
                        "max": 0.504,
                        "median": 0.376
                    },
                    {
                        "nutrientId": 1003,
                        "nutrientName": "Protein",
                        "nutrientNumber": "203",
                        "unitName": "G",
                        "derivationCode": "NC",
                        "derivationDescription": "Calculated",
                        "derivationId": 49,
                        "value": 10.7,
                        "foodNutrientSourceId": 2,
                        "foodNutrientSourceCode": "4",
                        "foodNutrientSourceDescription": "Calculated or imputed",
                        "rank": 600,
                        "indentLevel": 1,
                        "foodNutrientId": 8526265,
                        "min": 9.5,
                        "max": 12.3,
                        "median": 10.6
                    },
                    {
                        "nutrientId": 1007,
                        "nutrientName": "Ash",
                        "nutrientNumber": "207",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 0.65,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 1000,
                        "indentLevel": 1,
                        "foodNutrientId": 8526266,
                        "dataPoints": 24,
                        "min": 0.48,
                        "max": 0.79,
                        "median": 0.66
                    },
                    {
                        "nutrientId": 1103,
                        "nutrientName": "Selenium, Se",
                        "nutrientNumber": "317",
                        "unitName": "UG",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 17.9,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 6200,
                        "indentLevel": 1,
                        "foodNutrientId": 8526267,
                        "dataPoints": 24,
                        "min": 7,
                        "max": 48.8,
                        "median": 14.6
                    },
                    {
                        "nutrientId": 1004,
                        "nutrientName": "Total lipid (fat)",
                        "nutrientNumber": "204",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 0,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 800,
                        "indentLevel": 1,
                        "foodNutrientId": 8526268,
                        "dataPoints": 24,
                        "min": 0,
                        "max": 0,
                        "median": 0
                    },
                    {
                        "nutrientId": 1051,
                        "nutrientName": "Water",
                        "nutrientNumber": "255",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 86.3,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 100,
                        "indentLevel": 1,
                        "foodNutrientId": 8526269,
                        "dataPoints": 24,
                        "min": 84.4,
                        "max": 88.4,
                        "median": 86.3
                    },
                    {
                        "nutrientId": 1062,
                        "nutrientName": "Energy",
                        "nutrientNumber": "268",
                        "unitName": "kJ",
                        "derivationCode": "NC",
                        "derivationDescription": "Calculated",
                        "derivationId": 49,
                        "value": 231,
                        "foodNutrientSourceId": 2,
                        "foodNutrientSourceCode": "4",
                        "foodNutrientSourceDescription": "Calculated or imputed",
                        "rank": 400,
                        "indentLevel": 1,
                        "foodNutrientId": 8526270
                    },
                    {
                        "nutrientId": 1008,
                        "nutrientName": "Energy",
                        "nutrientNumber": "208",
                        "unitName": "KCAL",
                        "derivationCode": "NC",
                        "derivationDescription": "Calculated",
                        "derivationId": 49,
                        "value": 55,
                        "foodNutrientSourceId": 2,
                        "foodNutrientSourceCode": "4",
                        "foodNutrientSourceDescription": "Calculated or imputed",
                        "rank": 300,
                        "indentLevel": 1,
                        "foodNutrientId": 8526271
                    },
                    {
                        "nutrientId": 1005,
                        "nutrientName": "Carbohydrate, by difference",
                        "nutrientNumber": "205",
                        "unitName": "G",
                        "derivationCode": "NC",
                        "derivationDescription": "Calculated",
                        "derivationId": 49,
                        "value": 2.36,
                        "foodNutrientSourceId": 2,
                        "foodNutrientSourceCode": "4",
                        "foodNutrientSourceDescription": "Calculated or imputed",
                        "rank": 1110,
                        "indentLevel": 2,
                        "foodNutrientId": 8526272
                    },
                    {
                        "nutrientId": 1002,
                        "nutrientName": "Nitrogen",
                        "nutrientNumber": "202",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 1.71,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 500,
                        "indentLevel": 1,
                        "foodNutrientId": 8526273,
                        "dataPoints": 24,
                        "min": 1.52,
                        "max": 1.97,
                        "median": 1.7
                    },
                    {
                        "nutrientId": 1210,
                        "nutrientName": "Tryptophan",
                        "nutrientNumber": "501",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 0.188,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 16300,
                        "indentLevel": 1,
                        "foodNutrientId": 8526274,
                        "dataPoints": 18,
                        "min": 0.15,
                        "max": 0.23,
                        "median": 0.19
                    },
                    {
                        "nutrientId": 1218,
                        "nutrientName": "Tyrosine",
                        "nutrientNumber": "509",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 0.466,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 17100,
                        "indentLevel": 1,
                        "foodNutrientId": 8526275,
                        "dataPoints": 18,
                        "min": 0.34,
                        "max": 0.54,
                        "median": 0.485
                    },
                    {
                        "nutrientId": 1219,
                        "nutrientName": "Valine",
                        "nutrientNumber": "510",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 0.779,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 17200,
                        "indentLevel": 1,
                        "foodNutrientId": 8526276,
                        "dataPoints": 18,
                        "min": 0.55,
                        "max": 0.88,
                        "median": 0.805
                    },
                    {
                        "nutrientId": 1211,
                        "nutrientName": "Threonine",
                        "nutrientNumber": "502",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 0.567,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 16400,
                        "indentLevel": 1,
                        "foodNutrientId": 8526277,
                        "dataPoints": 18,
                        "min": 0.41,
                        "max": 0.65,
                        "median": 0.58
                    },
                    {
                        "nutrientId": 1226,
                        "nutrientName": "Proline",
                        "nutrientNumber": "517",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 0.494,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 17900,
                        "indentLevel": 1,
                        "foodNutrientId": 8526278,
                        "dataPoints": 18,
                        "min": 0.36,
                        "max": 0.57,
                        "median": 0.495
                    },
                    {
                        "nutrientId": 1227,
                        "nutrientName": "Serine",
                        "nutrientNumber": "518",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 0.857,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 18000,
                        "indentLevel": 1,
                        "foodNutrientId": 8526279,
                        "dataPoints": 18,
                        "min": 0.6,
                        "max": 0.95,
                        "median": 0.86
                    },
                    {
                        "nutrientId": 1217,
                        "nutrientName": "Phenylalanine",
                        "nutrientNumber": "508",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 0.726,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 17000,
                        "indentLevel": 1,
                        "foodNutrientId": 8526280,
                        "dataPoints": 18,
                        "min": 0.52,
                        "max": 0.82,
                        "median": 0.76
                    },
                    {
                        "nutrientId": 1215,
                        "nutrientName": "Methionine",
                        "nutrientNumber": "506",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 0.486,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 16800,
                        "indentLevel": 1,
                        "foodNutrientId": 8526281,
                        "dataPoints": 18,
                        "min": 0.35,
                        "max": 0.55,
                        "median": 0.505
                    },
                    {
                        "nutrientId": 1213,
                        "nutrientName": "Leucine",
                        "nutrientNumber": "504",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 1.02,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 16600,
                        "indentLevel": 1,
                        "foodNutrientId": 8526282,
                        "dataPoints": 18,
                        "min": 0.73,
                        "max": 1.15,
                        "median": 1.04
                    },
                    {
                        "nutrientId": 1214,
                        "nutrientName": "Lysine",
                        "nutrientNumber": "505",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 0.822,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 16700,
                        "indentLevel": 1,
                        "foodNutrientId": 8526283,
                        "dataPoints": 18,
                        "min": 0.6,
                        "max": 0.98,
                        "median": 0.83
                    },
                    {
                        "nutrientId": 1221,
                        "nutrientName": "Histidine",
                        "nutrientNumber": "512",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 0.257,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 17400,
                        "indentLevel": 1,
                        "foodNutrientId": 8526284,
                        "dataPoints": 18,
                        "min": 0.19,
                        "max": 0.31,
                        "median": 0.265
                    },
                    {
                        "nutrientId": 1212,
                        "nutrientName": "Isoleucine",
                        "nutrientNumber": "503",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 0.609,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 16500,
                        "indentLevel": 1,
                        "foodNutrientId": 8526285,
                        "dataPoints": 18,
                        "min": 0.44,
                        "max": 0.69,
                        "median": 0.62
                    },
                    {
                        "nutrientId": 1224,
                        "nutrientName": "Glutamic acid",
                        "nutrientNumber": "515",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 1.76,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 17700,
                        "indentLevel": 1,
                        "foodNutrientId": 8526286,
                        "dataPoints": 18,
                        "min": 1.18,
                        "max": 2.19,
                        "median": 1.81
                    },
                    {
                        "nutrientId": 1225,
                        "nutrientName": "Glycine",
                        "nutrientNumber": "516",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 0.422,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 17800,
                        "indentLevel": 1,
                        "foodNutrientId": 8526287,
                        "dataPoints": 18,
                        "min": 0.31,
                        "max": 0.49,
                        "median": 0.43
                    },
                    {
                        "nutrientId": 1223,
                        "nutrientName": "Aspartic acid",
                        "nutrientNumber": "514",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 1.33,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 17600,
                        "indentLevel": 1,
                        "foodNutrientId": 8526288,
                        "dataPoints": 18,
                        "min": 0.95,
                        "max": 1.51,
                        "median": 1.34
                    },
                    {
                        "nutrientId": 1220,
                        "nutrientName": "Arginine",
                        "nutrientNumber": "511",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 0.691,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 17300,
                        "indentLevel": 1,
                        "foodNutrientId": 8526289,
                        "dataPoints": 18,
                        "min": 0.5,
                        "max": 0.79,
                        "median": 0.715
                    },
                    {
                        "nutrientId": 1222,
                        "nutrientName": "Alanine",
                        "nutrientNumber": "513",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 0.714,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 17500,
                        "indentLevel": 1,
                        "foodNutrientId": 8526290,
                        "dataPoints": 18,
                        "min": 0.5,
                        "max": 0.81,
                        "median": 0.73
                    },
                    {
                        "nutrientId": 1228,
                        "nutrientName": "Hydroxyproline",
                        "nutrientNumber": "521",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 0,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 18100,
                        "indentLevel": 1,
                        "foodNutrientId": 8526291,
                        "dataPoints": 18,
                        "min": 0,
                        "max": 0,
                        "median": 0
                    },
                    {
                        "nutrientId": 1232,
                        "nutrientName": "Cysteine",
                        "nutrientNumber": "526",
                        "unitName": "G",
                        "derivationCode": "A",
                        "derivationDescription": "Analytical",
                        "derivationId": 1,
                        "value": 0.407,
                        "foodNutrientSourceId": 1,
                        "foodNutrientSourceCode": "1",
                        "foodNutrientSourceDescription": "Analytical or derived from analytical",
                        "rank": 18150,
                        "indentLevel": 1,
                        "foodNutrientId": 8526292,
                        "dataPoints": 18,
                        "min": 0.28,
                        "max": 0.57,
                        "median": 0.4
                    }
                ],
                "finalFoodInputFoods": [],
                "foodMeasures": [],
                "foodAttributes": [],
                "foodAttributeTypes": [],
                "foodVersionIds": []
            },
            {
                "fdcId": 2342655,
                "description": "Egg, Benedict",
                "commonNames": "",
                "additionalDescriptions": "",
                "dataType": "Survey (FNDDS)",
                "foodCode": 32101500,
                "publishedDate": "2022-10-28",
                "foodCategory": "Eggs and omelets",
                "foodCategoryId": 2644981,
                "allHighlightFields": "",
                "score": 321.32336,
                "microbes": [],
                "foodNutrients": [
                    {
                        "nutrientId": 1003,
                        "nutrientName": "Protein",
                        "nutrientNumber": "203",
                        "unitName": "G",
                        "value": 13.8,
                        "rank": 600,
                        "indentLevel": 1,
                        "foodNutrientId": 28663699
                    },
                    {
                        "nutrientId": 1004,
                        "nutrientName": "Total lipid (fat)",
                        "nutrientNumber": "204",
                        "unitName": "G",
                        "value": 22.1,
                        "rank": 800,
                        "indentLevel": 1,
                        "foodNutrientId": 28663700
                    },
                    {
                        "nutrientId": 1005,
                        "nutrientName": "Carbohydrate, by difference",
                        "nutrientNumber": "205",
                        "unitName": "G",
                        "value": 8.48,
                        "rank": 1110,
                        "indentLevel": 2,
                        "foodNutrientId": 28663701
                    },
                    {
                        "nutrientId": 1008,
                        "nutrientName": "Energy",
                        "nutrientNumber": "208",
                        "unitName": "KCAL",
                        "value": 288,
                        "rank": 300,
                        "indentLevel": 1,
                        "foodNutrientId": 28663702
                    },
                    {
                        "nutrientId": 1018,
                        "nutrientName": "Alcohol, ethyl",
                        "nutrientNumber": "221",
                        "unitName": "G",
                        "value": 0,
                        "rank": 18200,
                        "indentLevel": 1,
                        "foodNutrientId": 28663703
                    },
                    {
                        "nutrientId": 1051,
                        "nutrientName": "Water",
                        "nutrientNumber": "255",
                        "unitName": "G",
                        "value": 53.5,
                        "rank": 100,
                        "indentLevel": 1,
                        "foodNutrientId": 28663704
                    },
                    {
                        "nutrientId": 1057,
                        "nutrientName": "Caffeine",
                        "nutrientNumber": "262",
                        "unitName": "MG",
                        "value": 0,
                        "rank": 18300,
                        "indentLevel": 0,
                        "foodNutrientId": 28663705
                    },
                    {
                        "nutrientId": 1058,
                        "nutrientName": "Theobromine",
                        "nutrientNumber": "263",
                        "unitName": "MG",
                        "value": 0,
                        "rank": 18400,
                        "indentLevel": 0,
                        "foodNutrientId": 28663706
                    },
                    {
                        "nutrientId": 2000,
                        "nutrientName": "Sugars, total including NLEA",
                        "nutrientNumber": "269",
                        "unitName": "G",
                        "value": 1.17,
                        "rank": 1510,
                        "indentLevel": 3,
                        "foodNutrientId": 28663707
                    },
                    {
                        "nutrientId": 1079,
                        "nutrientName": "Fiber, total dietary",
                        "nutrientNumber": "291",
                        "unitName": "G",
                        "value": 0.6,
                        "rank": 1200,
                        "indentLevel": 3,
                        "foodNutrientId": 28663708
                    },
                    {
                        "nutrientId": 1087,
                        "nutrientName": "Calcium, Ca",
                        "nutrientNumber": "301",
                        "unitName": "MG",
                        "value": 58,
                        "rank": 5300,
                        "indentLevel": 1,
                        "foodNutrientId": 28663709
                    },
                    {
                        "nutrientId": 1089,
                        "nutrientName": "Iron, Fe",
                        "nutrientNumber": "303",
                        "unitName": "MG",
                        "value": 1.56,
                        "rank": 5400,
                        "indentLevel": 1,
                        "foodNutrientId": 28663710
                    },
                    {
                        "nutrientId": 1090,
                        "nutrientName": "Magnesium, Mg",
                        "nutrientNumber": "304",
                        "unitName": "MG",
                        "value": 15,
                        "rank": 5500,
                        "indentLevel": 1,
                        "foodNutrientId": 28663711
                    },
                    {
                        "nutrientId": 1091,
                        "nutrientName": "Phosphorus, P",
                        "nutrientNumber": "305",
                        "unitName": "MG",
                        "value": 185,
                        "rank": 5600,
                        "indentLevel": 1,
                        "foodNutrientId": 28663712
                    },
                    {
                        "nutrientId": 1092,
                        "nutrientName": "Potassium, K",
                        "nutrientNumber": "306",
                        "unitName": "MG",
                        "value": 325,
                        "rank": 5700,
                        "indentLevel": 1,
                        "foodNutrientId": 28663713
                    },
                    {
                        "nutrientId": 1093,
                        "nutrientName": "Sodium, Na",
                        "nutrientNumber": "307",
                        "unitName": "MG",
                        "value": 468,
                        "rank": 5800,
                        "indentLevel": 1,
                        "foodNutrientId": 28663714
                    },
                    {
                        "nutrientId": 1095,
                        "nutrientName": "Zinc, Zn",
                        "nutrientNumber": "309",
                        "unitName": "MG",
                        "value": 1.19,
                        "rank": 5900,
                        "indentLevel": 1,
                        "foodNutrientId": 28663715
                    },
                    {
                        "nutrientId": 1098,
                        "nutrientName": "Copper, Cu",
                        "nutrientNumber": "312",
                        "unitName": "MG",
                        "value": 0.047,
                        "rank": 6000,
                        "indentLevel": 1,
                        "foodNutrientId": 28663716
                    },
                    {
                        "nutrientId": 1103,
                        "nutrientName": "Selenium, Se",
                        "nutrientNumber": "317",
                        "unitName": "UG",
                        "value": 30.4,
                        "rank": 6200,
                        "indentLevel": 1,
                        "foodNutrientId": 28663717
                    },
                    {
                        "nutrientId": 1105,
                        "nutrientName": "Retinol",
                        "nutrientNumber": "319",
                        "unitName": "UG",
                        "value": 228,
                        "rank": 7430,
                        "indentLevel": 2,
                        "foodNutrientId": 28663718
                    },
                    {
                        "nutrientId": 1106,
                        "nutrientName": "Vitamin A, RAE",
                        "nutrientNumber": "320",
                        "unitName": "UG",
                        "value": 232,
                        "rank": 7420,
                        "indentLevel": 1,
                        "foodNutrientId": 28663719
                    },
                    {
                        "nutrientId": 1107,
                        "nutrientName": "Carotene, beta",
                        "nutrientNumber": "321",
                        "unitName": "UG",
                        "value": 49,
                        "rank": 7440,
                        "indentLevel": 2,
                        "foodNutrientId": 28663720
                    },
                    {
                        "nutrientId": 1108,
                        "nutrientName": "Carotene, alpha",
                        "nutrientNumber": "322",
                        "unitName": "UG",
                        "value": 4,
                        "rank": 7450,
                        "indentLevel": 2,
                        "foodNutrientId": 28663721
                    },
                    {
                        "nutrientId": 1109,
                        "nutrientName": "Vitamin E (alpha-tocopherol)",
                        "nutrientNumber": "323",
                        "unitName": "MG",
                        "value": 1.14,
                        "rank": 7905,
                        "indentLevel": 1,
                        "foodNutrientId": 28663722
                    },
                    {
                        "nutrientId": 1114,
                        "nutrientName": "Vitamin D (D2 + D3)",
                        "nutrientNumber": "328",
                        "unitName": "UG",
                        "value": 1.4,
                        "rank": 8700,
                        "indentLevel": 1,
                        "foodNutrientId": 28663723
                    },
                    {
                        "nutrientId": 1120,
                        "nutrientName": "Cryptoxanthin, beta",
                        "nutrientNumber": "334",
                        "unitName": "UG",
                        "value": 8,
                        "rank": 7460,
                        "indentLevel": 2,
                        "foodNutrientId": 28663724
                    },
                    {
                        "nutrientId": 1122,
                        "nutrientName": "Lycopene",
                        "nutrientNumber": "337",
                        "unitName": "UG",
                        "value": 0,
                        "rank": 7530,
                        "indentLevel": 1,
                        "foodNutrientId": 28663725
                    },
                    {
                        "nutrientId": 1123,
                        "nutrientName": "Lutein + zeaxanthin",
                        "nutrientNumber": "338",
                        "unitName": "UG",
                        "value": 249,
                        "rank": 7560,
                        "indentLevel": 1,
                        "foodNutrientId": 28663726
                    },
                    {
                        "nutrientId": 1162,
                        "nutrientName": "Vitamin C, total ascorbic acid",
                        "nutrientNumber": "401",
                        "unitName": "MG",
                        "value": 1.4,
                        "rank": 6300,
                        "indentLevel": 1,
                        "foodNutrientId": 28663727
                    },
                    {
                        "nutrientId": 1165,
                        "nutrientName": "Thiamin",
                        "nutrientNumber": "404",
                        "unitName": "MG",
                        "value": 0.264,
                        "rank": 6400,
                        "indentLevel": 1,
                        "foodNutrientId": 28663728
                    },
                    {
                        "nutrientId": 1166,
                        "nutrientName": "Riboflavin",
                        "nutrientNumber": "405",
                        "unitName": "MG",
                        "value": 0.241,
                        "rank": 6500,
                        "indentLevel": 1,
                        "foodNutrientId": 28663729
                    },
                    {
                        "nutrientId": 1167,
                        "nutrientName": "Niacin",
                        "nutrientNumber": "406",
                        "unitName": "MG",
                        "value": 3.2,
                        "rank": 6600,
                        "indentLevel": 1,
                        "foodNutrientId": 28663730
                    },
                    {
                        "nutrientId": 1175,
                        "nutrientName": "Vitamin B-6",
                        "nutrientNumber": "415",
                        "unitName": "MG",
                        "value": 0.124,
                        "rank": 6800,
                        "indentLevel": 1,
                        "foodNutrientId": 28663731
                    },
                    {
                        "nutrientId": 1177,
                        "nutrientName": "Folate, total",
                        "nutrientNumber": "417",
                        "unitName": "UG",
                        "value": 41,
                        "rank": 6900,
                        "indentLevel": 1,
                        "foodNutrientId": 28663732
                    },
                    {
                        "nutrientId": 1178,
                        "nutrientName": "Vitamin B-12",
                        "nutrientNumber": "418",
                        "unitName": "UG",
                        "value": 0.49,
                        "rank": 7300,
                        "indentLevel": 1,
                        "foodNutrientId": 28663733
                    },
                    {
                        "nutrientId": 1180,
                        "nutrientName": "Choline, total",
                        "nutrientNumber": "421",
                        "unitName": "MG",
                        "value": 168,
                        "rank": 7220,
                        "indentLevel": 1,
                        "foodNutrientId": 28663734
                    },
                    {
                        "nutrientId": 1185,
                        "nutrientName": "Vitamin K (phylloquinone)",
                        "nutrientNumber": "430",
                        "unitName": "UG",
                        "value": 3.5,
                        "rank": 8800,
                        "indentLevel": 1,
                        "foodNutrientId": 28663735
                    },
                    {
                        "nutrientId": 1186,
                        "nutrientName": "Folic acid",
                        "nutrientNumber": "431",
                        "unitName": "UG",
                        "value": 8,
                        "rank": 7000,
                        "indentLevel": 0,
                        "foodNutrientId": 28663736
                    },
                    {
                        "nutrientId": 1187,
                        "nutrientName": "Folate, food",
                        "nutrientNumber": "432",
                        "unitName": "UG",
                        "value": 33,
                        "rank": 7100,
                        "indentLevel": 1,
                        "foodNutrientId": 28663737
                    },
                    {
                        "nutrientId": 1190,
                        "nutrientName": "Folate, DFE",
                        "nutrientNumber": "435",
                        "unitName": "UG",
                        "value": 46,
                        "rank": 7200,
                        "indentLevel": 1,
                        "foodNutrientId": 28663738
                    },
                    {
                        "nutrientId": 1242,
                        "nutrientName": "Vitamin E, added",
                        "nutrientNumber": "573",
                        "unitName": "MG",
                        "value": 0,
                        "rank": 7920,
                        "indentLevel": 0,
                        "foodNutrientId": 28663739
                    },
                    {
                        "nutrientId": 1246,
                        "nutrientName": "Vitamin B-12, added",
                        "nutrientNumber": "578",
                        "unitName": "UG",
                        "value": 0,
                        "rank": 7340,
                        "indentLevel": 0,
                        "foodNutrientId": 28663740
                    },
                    {
                        "nutrientId": 1253,
                        "nutrientName": "Cholesterol",
                        "nutrientNumber": "601",
                        "unitName": "MG",
                        "value": 271,
                        "rank": 15700,
                        "indentLevel": 1,
                        "foodNutrientId": 28663741
                    },
                    {
                        "nutrientId": 1258,
                        "nutrientName": "Fatty acids, total saturated",
                        "nutrientNumber": "606",
                        "unitName": "G",
                        "value": 10.3,
                        "rank": 9700,
                        "indentLevel": 1,
                        "foodNutrientId": 28663742
                    },
                    {
                        "nutrientId": 1259,
                        "nutrientName": "SFA 4:0",
                        "nutrientNumber": "607",
                        "unitName": "G",
                        "value": 0.349,
                        "rank": 9800,
                        "indentLevel": 2,
                        "foodNutrientId": 28663743
                    },
                    {
                        "nutrientId": 1260,
                        "nutrientName": "SFA 6:0",
                        "nutrientNumber": "608",
                        "unitName": "G",
                        "value": 0.246,
                        "rank": 9900,
                        "indentLevel": 2,
                        "foodNutrientId": 28663744
                    },
                    {
                        "nutrientId": 1261,
                        "nutrientName": "SFA 8:0",
                        "nutrientNumber": "609",
                        "unitName": "G",
                        "value": 0.145,
                        "rank": 10000,
                        "indentLevel": 2,
                        "foodNutrientId": 28663745
                    },
                    {
                        "nutrientId": 1262,
                        "nutrientName": "SFA 10:0",
                        "nutrientNumber": "610",
                        "unitName": "G",
                        "value": 0.332,
                        "rank": 10100,
                        "indentLevel": 2,
                        "foodNutrientId": 28663746
                    },
                    {
                        "nutrientId": 1263,
                        "nutrientName": "SFA 12:0",
                        "nutrientNumber": "611",
                        "unitName": "G",
                        "value": 0.391,
                        "rank": 10300,
                        "indentLevel": 2,
                        "foodNutrientId": 28663747
                    },
                    {
                        "nutrientId": 1264,
                        "nutrientName": "SFA 14:0",
                        "nutrientNumber": "612",
                        "unitName": "G",
                        "value": 1.26,
                        "rank": 10500,
                        "indentLevel": 2,
                        "foodNutrientId": 28663748
                    },
                    {
                        "nutrientId": 1265,
                        "nutrientName": "SFA 16:0",
                        "nutrientNumber": "613",
                        "unitName": "G",
                        "value": 5.28,
                        "rank": 10700,
                        "indentLevel": 2,
                        "foodNutrientId": 28663749
                    },
                    {
                        "nutrientId": 1266,
                        "nutrientName": "SFA 18:0",
                        "nutrientNumber": "614",
                        "unitName": "G",
                        "value": 1.98,
                        "rank": 10900,
                        "indentLevel": 2,
                        "foodNutrientId": 28663750
                    },
                    {
                        "nutrientId": 1268,
                        "nutrientName": "MUFA 18:1",
                        "nutrientNumber": "617",
                        "unitName": "G",
                        "value": 5.62,
                        "rank": 12100,
                        "indentLevel": 2,
                        "foodNutrientId": 28663751
                    },
                    {
                        "nutrientId": 1269,
                        "nutrientName": "PUFA 18:2",
                        "nutrientNumber": "618",
                        "unitName": "G",
                        "value": 1.75,
                        "rank": 13100,
                        "indentLevel": 2,
                        "foodNutrientId": 28663752
                    },
                    {
                        "nutrientId": 1270,
                        "nutrientName": "PUFA 18:3",
                        "nutrientNumber": "619",
                        "unitName": "G",
                        "value": 0.122,
                        "rank": 13900,
                        "indentLevel": 2,
                        "foodNutrientId": 28663753
                    },
                    {
                        "nutrientId": 1271,
                        "nutrientName": "PUFA 20:4",
                        "nutrientNumber": "620",
                        "unitName": "G",
                        "value": 0.072,
                        "rank": 14700,
                        "indentLevel": 2,
                        "foodNutrientId": 28663754
                    },
                    {
                        "nutrientId": 1272,
                        "nutrientName": "PUFA 22:6 n-3 (DHA)",
                        "nutrientNumber": "621",
                        "unitName": "G",
                        "value": 0.01,
                        "rank": 15300,
                        "indentLevel": 2,
                        "foodNutrientId": 28663755
                    },
                    {
                        "nutrientId": 1275,
                        "nutrientName": "MUFA 16:1",
                        "nutrientNumber": "626",
                        "unitName": "G",
                        "value": 0.342,
                        "rank": 11700,
                        "indentLevel": 2,
                        "foodNutrientId": 28663756
                    },
                    {
                        "nutrientId": 1276,
                        "nutrientName": "PUFA 18:4",
                        "nutrientNumber": "627",
                        "unitName": "G",
                        "value": 0.003,
                        "rank": 14250,
                        "indentLevel": 2,
                        "foodNutrientId": 28663757
                    },
                    {
                        "nutrientId": 1277,
                        "nutrientName": "MUFA 20:1",
                        "nutrientNumber": "628",
                        "unitName": "G",
                        "value": 0.036,
                        "rank": 12400,
                        "indentLevel": 2,
                        "foodNutrientId": 28663758
                    },
                    {
                        "nutrientId": 1278,
                        "nutrientName": "PUFA 20:5 n-3 (EPA)",
                        "nutrientNumber": "629",
                        "unitName": "G",
                        "value": 0.005,
                        "rank": 15000,
                        "indentLevel": 2,
                        "foodNutrientId": 28663759
                    },
                    {
                        "nutrientId": 1279,
                        "nutrientName": "MUFA 22:1",
                        "nutrientNumber": "630",
                        "unitName": "G",
                        "value": 0.002,
                        "rank": 12500,
                        "indentLevel": 2,
                        "foodNutrientId": 28663760
                    },
                    {
                        "nutrientId": 1280,
                        "nutrientName": "PUFA 22:5 n-3 (DPA)",
                        "nutrientNumber": "631",
                        "unitName": "G",
                        "value": 0.008,
                        "rank": 15200,
                        "indentLevel": 2,
                        "foodNutrientId": 28663761
                    },
                    {
                        "nutrientId": 1292,
                        "nutrientName": "Fatty acids, total monounsaturated",
                        "nutrientNumber": "645",
                        "unitName": "G",
                        "value": 6.15,
                        "rank": 11400,
                        "indentLevel": 1,
                        "foodNutrientId": 28663762
                    },
                    {
                        "nutrientId": 1293,
                        "nutrientName": "Fatty acids, total polyunsaturated",
                        "nutrientNumber": "646",
                        "unitName": "G",
                        "value": 2.04,
                        "rank": 12900,
                        "indentLevel": 1,
                        "foodNutrientId": 28663763
                    }
                ],
                "finalFoodInputFoods": [
                    {
                        "foodDescription": "Hollandaise sauce",
                        "gramWeight": 192.75,
                        "id": 111510,
                        "portionCode": "0",
                        "portionDescription": "NONE",
                        "unit": "GM",
                        "rank": 1,
                        "srCode": 81302010,
                        "value": 193
                    },
                    {
                        "foodDescription": "Canadian bacon, cooked, pan-fried",
                        "gramWeight": 170,
                        "id": 111511,
                        "portionCode": "0",
                        "portionDescription": "NONE",
                        "unit": "GM",
                        "rank": 2,
                        "srCode": 10998,
                        "value": 170
                    },
                    {
                        "foodDescription": "Muffins, English, plain, enriched, with ca prop (includes sourdough)",
                        "gramWeight": 114,
                        "id": 111513,
                        "portionCode": "61491",
                        "portionDescription": "1 muffin",
                        "unit": "",
                        "rank": 4,
                        "srCode": 18258,
                        "value": 2
                    },
                    {
                        "foodDescription": "Margarine, stick",
                        "gramWeight": 14,
                        "id": 111512,
                        "portionCode": "10205",
                        "portionDescription": "1 cup",
                        "unit": "TS",
                        "rank": 3,
                        "srCode": 81102010,
                        "value": 3
                    },
                    {
                        "foodDescription": "Egg, whole, boiled or poached",
                        "gramWeight": 200,
                        "id": 111514,
                        "portionCode": "0",
                        "portionDescription": "NONE",
                        "unit": "GM",
                        "rank": 5,
                        "srCode": 31103010,
                        "value": 200
                    }
                ],
                "foodMeasures": [
                    {
                        "disseminationText": "Quantity not specified",
                        "gramWeight": 155,
                        "id": 274946,
                        "modifier": "90000",
                        "rank": 2,
                        "measureUnitAbbreviation": "undetermined",
                        "measureUnitName": "undetermined",
                        "measureUnitId": 9999
                    },
                    {
                        "disseminationText": "1 egg",
                        "gramWeight": 155,
                        "id": 274945,
                        "modifier": "60710",
                        "rank": 1,
                        "measureUnitAbbreviation": "undetermined",
                        "measureUnitName": "undetermined",
                        "measureUnitId": 9999
                    }
                ],
                "foodAttributes": [],
                "foodAttributeTypes": [
                    {
                        "name": "Adjustments",
                        "description": "Adjustments made to foods, including moisture changes",
                        "id": 1002,
                        "foodAttributes": [
                            {
                                "value": "Moisture change: -2%",
                                "id": 2664380
                            }
                        ]
                    },
                    {
                        "name": "Attribute",
                        "description": "Generic attributes",
                        "id": 999,
                        "foodAttributes": [
                            {
                                "value": "2502",
                                "name": "WWEIA Category number",
                                "id": 2644980
                            },
                            {
                                "value": "Eggs and omelets",
                                "name": "WWEIA Category description",
                                "id": 2644981
                            }
                        ]
                    }
                ],
                "foodVersionIds": []
            }
        ]
    }

    fetch.mockResponseOnce(JSON.stringify(testData));
  
    await fireEvent.change(screen.getByTestId("ingredient-search-input"), {
      target: { value: "egg" },
    });
    await fireEvent.click(screen.getByTestId("ingredient-search-button"));

    await screen.findByText("Eggs, grade a, large, egg white");
    await screen.findByText("Egg, benedict");
  });
});