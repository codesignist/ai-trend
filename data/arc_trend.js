window.ARC_TREND = {
 "source": "https://arcprize.org/leaderboard",
 "fetched": "2026-09-23",
 "benchmarks": [
  {
   "id": "v1_Semi_Private",
   "label": "ARC-AGI-1"
  },
  {
   "id": "v2_Semi_Private",
   "label": "ARC-AGI-2"
  },
  {
   "id": "v3_Semi_Private",
   "label": "ARC-AGI-3"
  }
 ],
 "families": [
  {
   "id": "opus",
   "name": "Claude Opus",
   "provider": "Anthropic",
   "featured": true,
   "versions": [
    {
     "version": "4",
     "label": "Opus 4",
     "released": "2025-05-14",
     "scores": {
      "v1_Semi_Private": {
       "n": 4,
       "mean": 0.2896,
       "min": 0.225,
       "max": 0.3567,
       "meanCost": 0.724025,
       "bestCost": 1.2496,
       "variants": [
        {
         "name": "Thinking 16K",
         "score": 0.3567,
         "cost": 1.2496
        },
        {
         "name": "Thinking 8K",
         "score": 0.3067,
         "cost": 0.7408
        },
        {
         "name": "Thinking 1K",
         "score": 0.27,
         "cost": 0.5021
        },
        {
         "name": "Claude Opus 4",
         "score": 0.225,
         "cost": 0.4036
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 4,
       "mean": 0.036,
       "min": 0,
       "max": 0.0861,
       "meanCost": 1.1186,
       "bestCost": 1.9284,
       "variants": [
        {
         "name": "Thinking 16K",
         "score": 0.0861,
         "cost": 1.9284
        },
        {
         "name": "Thinking 8K",
         "score": 0.0452,
         "cost": 1.1569
        },
        {
         "name": "Claude Opus 4",
         "score": 0.0127,
         "cost": 0.6388
        },
        {
         "name": "Thinking 1K",
         "score": 0,
         "cost": 0.7503
        }
       ]
      }
     }
    },
    {
     "version": "4.5",
     "label": "Opus 4.5",
     "released": "2025-11-24",
     "scores": {
      "v1_Semi_Private": {
       "n": 5,
       "mean": 0.653,
       "min": 0.4,
       "max": 0.8,
       "meanCost": 0.71,
       "bestCost": 1.47,
       "variants": [
        {
         "name": "Thinking, 64K",
         "score": 0.8,
         "cost": 1.47
        },
        {
         "name": "Thinking, 32K",
         "score": 0.7583,
         "cost": 0.95
        },
        {
         "name": "Thinking, 16K",
         "score": 0.72,
         "cost": 0.62
        },
        {
         "name": "Thinking, 8K",
         "score": 0.5867,
         "cost": 0.38
        },
        {
         "name": "Thinking, None",
         "score": 0.4,
         "cost": 0.13
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 4,
       "mean": 0.205225,
       "min": 0.0778,
       "max": 0.3764,
       "meanCost": 0.9725,
       "bestCost": 2.4,
       "variants": [
        {
         "name": "Thinking, 64K",
         "score": 0.3764,
         "cost": 2.4
        },
        {
         "name": "Thinking, 16K",
         "score": 0.2278,
         "cost": 0.79
        },
        {
         "name": "Thinking, 8K",
         "score": 0.1389,
         "cost": 0.48
        },
        {
         "name": "Thinking, None",
         "score": 0.0778,
         "cost": 0.22
        }
       ]
      }
     }
    },
    {
     "version": "4.6",
     "label": "Opus 4.6",
     "released": "2026-02-05",
     "scores": {
      "v1_Semi_Private": {
       "n": 4,
       "mean": 0.9125,
       "min": 0.86,
       "max": 0.94,
       "meanCost": 1.22165,
       "bestCost": 1.3948,
       "variants": [
        {
         "name": "120K, High",
         "score": 0.94,
         "cost": 1.3948
        },
        {
         "name": "120K, Max",
         "score": 0.93,
         "cost": 1.8791
        },
        {
         "name": "120K, Medium",
         "score": 0.92,
         "cost": 0.9647
        },
        {
         "name": "120K, Low",
         "score": 0.86,
         "cost": 0.648
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 4,
       "mean": 0.671875,
       "min": 0.6458,
       "max": 0.6917,
       "meanCost": 3.021125,
       "bestCost": 3.4719,
       "variants": [
        {
         "name": "120K, High",
         "score": 0.6917,
         "cost": 3.4719
        },
        {
         "name": "120K, Max",
         "score": 0.6875,
         "cost": 3.641
        },
        {
         "name": "120K, Medium",
         "score": 0.6625,
         "cost": 2.7209
        },
        {
         "name": "120K, Low",
         "score": 0.6458,
         "cost": 2.2507
        }
       ]
      },
      "v3_Semi_Private": {
       "n": 1,
       "mean": 0.0051,
       "min": 0.0051,
       "max": 0.0051,
       "meanCost": null,
       "bestCost": null,
       "variants": [
        {
         "name": "Max",
         "score": 0.0051,
         "cost": null
        }
       ]
      }
     }
    },
    {
     "version": "4.7",
     "label": "Opus 4.7",
     "released": "2026-04-16",
     "scores": {
      "v1_Semi_Private": {
       "n": 4,
       "mean": 0.9187500000000001,
       "min": 0.91,
       "max": 0.935,
       "meanCost": 1.4475,
       "bestCost": 1.41,
       "variants": [
        {
         "name": "High",
         "score": 0.935,
         "cost": 1.41
        },
        {
         "name": "Max",
         "score": 0.92,
         "cost": 2.58
        },
        {
         "name": "Low",
         "score": 0.91,
         "cost": 0.76
        },
        {
         "name": "Medium",
         "score": 0.91,
         "cost": 1.04
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 4,
       "mean": 0.68435,
       "min": 0.6208,
       "max": 0.7583,
       "meanCost": 3.985,
       "bestCost": 7.43,
       "variants": [
        {
         "name": "Max",
         "score": 0.7583,
         "cost": 7.43
        },
        {
         "name": "High",
         "score": 0.6833,
         "cost": 3.17
        },
        {
         "name": "Medium",
         "score": 0.675,
         "cost": 2.96
        },
        {
         "name": "Low",
         "score": 0.6208,
         "cost": 2.38
        }
       ]
      },
      "v3_Semi_Private": {
       "n": 1,
       "mean": 0.0018,
       "min": 0.0018,
       "max": 0.0018,
       "meanCost": null,
       "bestCost": null,
       "variants": [
        {
         "name": "High",
         "score": 0.0018,
         "cost": null
        }
       ]
      }
     }
    },
    {
     "version": "4.8",
     "label": "Opus 4.8",
     "released": "2026-06-01",
     "scores": {
      "v1_Semi_Private": {
       "n": 4,
       "mean": 0.91,
       "min": 0.88,
       "max": 0.925,
       "meanCost": 1.23905,
       "bestCost": 2.332,
       "variants": [
        {
         "name": "Max",
         "score": 0.925,
         "cost": 2.332
        },
        {
         "name": "High",
         "score": 0.92,
         "cost": 1.0416
        },
        {
         "name": "Medium",
         "score": 0.915,
         "cost": 0.9115
        },
        {
         "name": "Low",
         "score": 0.88,
         "cost": 0.6711
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 3,
       "mean": 0.6865666666666667,
       "min": 0.6222,
       "max": 0.7208,
       "meanCost": 2.2713,
       "bestCost": 2.7425,
       "variants": [
        {
         "name": "High",
         "score": 0.7208,
         "cost": 2.7425
        },
        {
         "name": "Medium",
         "score": 0.7167,
         "cost": 2.3896
        },
        {
         "name": "Low",
         "score": 0.6222,
         "cost": 1.6818
        }
       ]
      },
      "v3_Semi_Private": {
       "n": 1,
       "mean": 0.0152,
       "min": 0.0152,
       "max": 0.0152,
       "meanCost": null,
       "bestCost": null,
       "variants": [
        {
         "name": "High",
         "score": 0.0152,
         "cost": null
        }
       ]
      }
     }
    },
    {
     "version": "5",
     "label": "Opus 5",
     "released": "2026-07-24",
     "scores": {
      "v1_Semi_Private": {
       "n": 2,
       "mean": 0.975,
       "min": 0.975,
       "max": 0.975,
       "meanCost": 0.585,
       "bestCost": 0.47,
       "variants": [
        {
         "name": "High",
         "score": 0.975,
         "cost": 0.47
        },
        {
         "name": "Max",
         "score": 0.975,
         "cost": 0.7
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 2,
       "mean": 0.89375,
       "min": 0.8833,
       "max": 0.9042,
       "meanCost": 1.755,
       "bestCost": 2.06,
       "variants": [
        {
         "name": "Max",
         "score": 0.9042,
         "cost": 2.06
        },
        {
         "name": "High",
         "score": 0.8833,
         "cost": 1.45
        }
       ]
      },
      "v3_Semi_Private": {
       "n": 1,
       "mean": 0.3016,
       "min": 0.3016,
       "max": 0.3016,
       "meanCost": null,
       "bestCost": null,
       "variants": [
        {
         "name": "High",
         "score": 0.3016,
         "cost": null
        }
       ]
      }
     }
    },
    {
     "version": "5.5",
     "label": "Opus 5.5",
     "released": "2026-09-22",
     "scores": {
      "v1_Semi_Private": {
       "n": 5,
       "mean": 0.959,
       "min": 0.885,
       "max": 0.985,
       "meanCost": 0.25882516,
       "bestCost": 0.15798964,
       "variants": [
        {
         "name": "High",
         "score": 0.985,
         "cost": 0.15798964
        },
        {
         "name": "Max",
         "score": 0.975,
         "cost": 0.64073264
        },
        {
         "name": "XHigh",
         "score": 0.975,
         "cost": 0.22304864
        },
        {
         "name": "Medium",
         "score": 0.975,
         "cost": 0.15227524
        },
        {
         "name": "Low",
         "score": 0.885,
         "cost": 0.12007963999999999
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 5,
       "mean": 0.8702777777777777,
       "min": 0.701388888888889,
       "max": 0.9333333333333333,
       "meanCost": 0.7017469333333334,
       "bestCost": 0.4078964666666666,
       "variants": [
        {
         "name": "High",
         "score": 0.9333333333333333,
         "cost": 0.4078964666666666
        },
        {
         "name": "XHigh",
         "score": 0.925,
         "cost": 0.6709066333333333
        },
        {
         "name": "Max",
         "score": 0.9166666666666666,
         "cost": 1.8517409666666667
        },
        {
         "name": "Medium",
         "score": 0.875,
         "cost": 0.3369188
        },
        {
         "name": "Low",
         "score": 0.701388888888889,
         "cost": 0.24127179999999998
        }
       ]
      }
     }
    }
   ]
  },
  {
   "id": "sonnet",
   "name": "Claude Sonnet",
   "provider": "Anthropic",
   "featured": false,
   "versions": [
    {
     "version": "3.7",
     "label": "Sonnet 3.7",
     "released": "2025-02-24",
     "scores": {
      "v1_Semi_Private": {
       "n": 4,
       "mean": 0.1875,
       "min": 0.116,
       "max": 0.286,
       "meanCost": 0.167,
       "bestCost": 0.33,
       "variants": [
        {
         "name": "16K",
         "score": 0.286,
         "cost": 0.33
        },
        {
         "name": "8K",
         "score": 0.212,
         "cost": 0.21
        },
        {
         "name": "Claude 3.7",
         "score": 0.136,
         "cost": 0.058
        },
        {
         "name": "1K",
         "score": 0.116,
         "cost": 0.07
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 4,
       "mean": 0.005,
       "min": 0,
       "max": 0.009,
       "meanCost": 0.2825,
       "bestCost": 0.36,
       "variants": [
        {
         "name": "8K",
         "score": 0.009,
         "cost": 0.36
        },
        {
         "name": "16K",
         "score": 0.007,
         "cost": 0.51
        },
        {
         "name": "1K",
         "score": 0.004,
         "cost": 0.14
        },
        {
         "name": "Claude 3.7",
         "score": 0,
         "cost": 0.12
        }
       ]
      }
     }
    },
    {
     "version": "4",
     "label": "Sonnet 4",
     "released": "2025-05-14",
     "scores": {
      "v1_Semi_Private": {
       "n": 4,
       "mean": 0.302075,
       "min": 0.2383,
       "max": 0.4,
       "meanCost": 0.18382500000000002,
       "bestCost": 0.3658,
       "variants": [
        {
         "name": "Thinking 16K",
         "score": 0.4,
         "cost": 0.3658
        },
        {
         "name": "Thinking 8K",
         "score": 0.29,
         "cost": 0.1952
        },
        {
         "name": "Thinking 1K",
         "score": 0.28,
         "cost": 0.0937
        },
        {
         "name": "Claude Sonnet 4",
         "score": 0.2383,
         "cost": 0.0806
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 4,
       "mean": 0.025425,
       "min": 0.0085,
       "max": 0.0593,
       "meanCost": 0.2552,
       "bestCost": 0.4857,
       "variants": [
        {
         "name": "Thinking 16K",
         "score": 0.0593,
         "cost": 0.4857
        },
        {
         "name": "Thinking 8K",
         "score": 0.0212,
         "cost": 0.2654
        },
        {
         "name": "Claude Sonnet 4",
         "score": 0.0127,
         "cost": 0.1272
        },
        {
         "name": "Thinking 1K",
         "score": 0.0085,
         "cost": 0.1425
        }
       ]
      }
     }
    },
    {
     "version": "4.5",
     "label": "Sonnet 4.5",
     "released": "2025-09-29",
     "scores": {
      "v1_Semi_Private": {
       "n": 5,
       "mean": 0.43,
       "min": 0.255,
       "max": 0.6367,
       "meanCost": 0.22776000000000002,
       "bestCost": 0.5193,
       "variants": [
        {
         "name": "Thinking 32K",
         "score": 0.6367,
         "cost": 0.5193
        },
        {
         "name": "Thinking 16K",
         "score": 0.4833,
         "cost": 0.2683
        },
        {
         "name": "Thinking 8K",
         "score": 0.465,
         "cost": 0.1776
        },
        {
         "name": "Thinking 1K",
         "score": 0.31,
         "cost": 0.0928
        },
        {
         "name": "Claude Sonnet 4.5",
         "score": 0.255,
         "cost": 0.0808
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 5,
       "mean": 0.07414000000000001,
       "min": 0.0375,
       "max": 0.1361,
       "meanCost": 0.32311999999999996,
       "bestCost": 0.7589,
       "variants": [
        {
         "name": "Thinking 32K",
         "score": 0.1361,
         "cost": 0.7589
        },
        {
         "name": "Thinking 8K",
         "score": 0.0694,
         "cost": 0.2349
        },
        {
         "name": "Thinking 16K",
         "score": 0.0694,
         "cost": 0.3499
        },
        {
         "name": "Thinking 1K",
         "score": 0.0583,
         "cost": 0.1424
        },
        {
         "name": "Claude Sonnet 4.5",
         "score": 0.0375,
         "cost": 0.1295
        }
       ]
      }
     }
    },
    {
     "version": "4.6",
     "label": "Sonnet 4.6",
     "released": "2026-02-17",
     "scores": {
      "v1_Semi_Private": {
       "n": 2,
       "mean": 0.8625,
       "min": 0.86,
       "max": 0.865,
       "meanCost": 1.3214000000000001,
       "bestCost": 1.1908,
       "variants": [
        {
         "name": "High",
         "score": 0.865,
         "cost": 1.1908
        },
        {
         "name": "Max",
         "score": 0.86,
         "cost": 1.452
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 2,
       "mean": 0.59375,
       "min": 0.5833,
       "max": 0.6042,
       "meanCost": 2.70725,
       "bestCost": 2.6966,
       "variants": [
        {
         "name": "High",
         "score": 0.6042,
         "cost": 2.6966
        },
        {
         "name": "Max",
         "score": 0.5833,
         "cost": 2.7179
        }
       ]
      }
     }
    }
   ]
  },
  {
   "id": "fable",
   "name": "Claude Fable",
   "provider": "Anthropic",
   "featured": false,
   "versions": [
    {
     "version": "5",
     "label": "Fable 5",
     "released": "2026-06-09",
     "scores": {
      "v1_Semi_Private": {
       "n": 5,
       "mean": 0.951,
       "min": 0.905,
       "max": 0.985,
       "meanCost": 1.0141412000000003,
       "bestCost": 2.1101577000000007,
       "variants": [
        {
         "name": "Max",
         "score": 0.985,
         "cost": 2.1101577000000007
        },
        {
         "name": "XHigh",
         "score": 0.985,
         "cost": 1.0224337000000001
        },
        {
         "name": "High",
         "score": 0.955,
         "cost": 0.7666246999999999
        },
        {
         "name": "Medium",
         "score": 0.925,
         "cost": 0.6638002000000002
        },
        {
         "name": "Low",
         "score": 0.905,
         "cost": 0.5076897000000001
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 5,
       "mean": 0.8486111111111111,
       "min": 0.7680555555555555,
       "max": 0.8916666666666667,
       "meanCost": 2.8530430000000004,
       "bestCost": 5.449076000000001,
       "variants": [
        {
         "name": "Max",
         "score": 0.8916666666666667,
         "cost": 5.449076000000001
        },
        {
         "name": "XHigh",
         "score": 0.8833333333333333,
         "cost": 3.0043564166666665
        },
        {
         "name": "High",
         "score": 0.875,
         "cost": 2.4358764166666664
        },
        {
         "name": "Medium",
         "score": 0.825,
         "cost": 1.9269780833333334
        },
        {
         "name": "Low",
         "score": 0.7680555555555555,
         "cost": 1.4489280833333338
        }
       ]
      }
     }
    },
    {
     "version": "5.1",
     "label": "Fable 5.1",
     "released": "2026-09-01",
     "scores": {
      "v1_Semi_Private": {
       "n": 5,
       "mean": 0.9490000000000001,
       "min": 0.9,
       "max": 0.975,
       "meanCost": 0.7366398000000001,
       "bestCost": 1.3997611,
       "variants": [
        {
         "name": "Max",
         "score": 0.975,
         "cost": 1.3997611
        },
        {
         "name": "XHigh",
         "score": 0.965,
         "cost": 0.9578876000000003
        },
        {
         "name": "High",
         "score": 0.96,
         "cost": 0.5169491
        },
        {
         "name": "Medium",
         "score": 0.945,
         "cost": 0.4425576000000001
        },
        {
         "name": "Low",
         "score": 0.9,
         "cost": 0.36604360000000014
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 5,
       "mean": 0.8666666666666666,
       "min": 0.7833333333333333,
       "max": 0.9,
       "meanCost": 2.2912279333333343,
       "bestCost": 4.492348833333334,
       "variants": [
        {
         "name": "Max",
         "score": 0.9,
         "cost": 4.492348833333334
        },
        {
         "name": "XHigh",
         "score": 0.9,
         "cost": 3.120216916666669
        },
        {
         "name": "High",
         "score": 0.8875,
         "cost": 1.6673061666666666
        },
        {
         "name": "Medium",
         "score": 0.8625,
         "cost": 1.2239411666666673
        },
        {
         "name": "Low",
         "score": 0.7833333333333333,
         "cost": 0.9523265833333336
        }
       ]
      }
     }
    }
   ]
  },
  {
   "id": "haiku",
   "name": "Claude Haiku",
   "provider": "Anthropic",
   "featured": false,
   "versions": [
    {
     "version": "4.5",
     "label": "Haiku 4.5",
     "released": "2025-10-01",
     "scores": {
      "v1_Semi_Private": {
       "n": 5,
       "mean": 0.28332,
       "min": 0.1433,
       "max": 0.4767,
       "meanCost": 0.09712000000000001,
       "bestCost": 0.2558,
       "variants": [
        {
         "name": "Thinking 32K",
         "score": 0.4767,
         "cost": 0.2558
        },
        {
         "name": "Thinking 16K",
         "score": 0.3733,
         "cost": 0.1042
        },
        {
         "name": "Thinking 8K",
         "score": 0.255,
         "cost": 0.0687
        },
        {
         "name": "Thinking 1K",
         "score": 0.1683,
         "cost": 0.0306
        },
        {
         "name": "Claude Haiku 4.5",
         "score": 0.1433,
         "cost": 0.0263
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 5,
       "mean": 0.02196,
       "min": 0.0125,
       "max": 0.0403,
       "meanCost": 0.13928000000000001,
       "bestCost": 0.3766,
       "variants": [
        {
         "name": "Thinking 32K",
         "score": 0.0403,
         "cost": 0.3766
        },
        {
         "name": "Thinking 16K",
         "score": 0.0278,
         "cost": 0.1392
        },
        {
         "name": "Thinking 8K",
         "score": 0.0167,
         "cost": 0.0909
        },
        {
         "name": "Claude Haiku 4.5",
         "score": 0.0125,
         "cost": 0.0426
        },
        {
         "name": "Thinking 1K",
         "score": 0.0125,
         "cost": 0.0471
        }
       ]
      }
     }
    }
   ]
  },
  {
   "id": "gpt",
   "name": "GPT",
   "provider": "OpenAI",
   "featured": true,
   "versions": [
    {
     "version": "5",
     "label": "GPT-5",
     "released": "2025-08-07",
     "scores": {
      "v1_Semi_Private": {
       "n": 4,
       "mean": 0.4296,
       "min": 0.06,
       "max": 0.6567,
       "meanCost": 0.25635,
       "bestCost": 0.5087,
       "variants": [
        {
         "name": "High",
         "score": 0.6567,
         "cost": 0.5087
        },
        {
         "name": "Medium",
         "score": 0.5617,
         "cost": 0.3301
        },
        {
         "name": "Low",
         "score": 0.44,
         "cost": 0.1531
        },
        {
         "name": "Minimal",
         "score": 0.06,
         "cost": 0.0335
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 5,
       "mean": 0.04246,
       "min": 0,
       "max": 0.0986,
       "meanCost": 0.32283999999999996,
       "bestCost": 0.7302,
       "variants": [
        {
         "name": "High",
         "score": 0.0986,
         "cost": 0.7302
        },
        {
         "name": "Medium",
         "score": 0.0749,
         "cost": 0.4486
        },
        {
         "name": "Low",
         "score": 0.0194,
         "cost": 0.1896
        },
        {
         "name": "Low",
         "score": 0.0194,
         "cost": 0.1896
        },
        {
         "name": "Minimal",
         "score": 0,
         "cost": 0.0562
        }
       ]
      }
     }
    },
    {
     "version": "5.1",
     "label": "GPT-5.1",
     "released": "2025-11-13",
     "scores": {
      "v1_Semi_Private": {
       "n": 4,
       "mean": 0.42374999999999996,
       "min": 0.0583,
       "max": 0.7283,
       "meanCost": 0.280675,
       "bestCost": 0.674,
       "variants": [
        {
         "name": "Thinking, High",
         "score": 0.7283,
         "cost": 0.674
        },
        {
         "name": "Thinking, Medium",
         "score": 0.5767,
         "cost": 0.3149
        },
        {
         "name": "Thinking, Low",
         "score": 0.3317,
         "cost": 0.1
        },
        {
         "name": "Thinking, None",
         "score": 0.0583,
         "cost": 0.0338
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 4,
       "mean": 0.066325,
       "min": 0.0042,
       "max": 0.1764,
       "meanCost": 0.444525,
       "bestCost": 1.1704,
       "variants": [
        {
         "name": "Thinking, High",
         "score": 0.1764,
         "cost": 1.1704
        },
        {
         "name": "Thinking, Medium",
         "score": 0.0653,
         "cost": 0.4206
        },
        {
         "name": "Thinking, Low",
         "score": 0.0194,
         "cost": 0.129
        },
        {
         "name": "Thinking, None",
         "score": 0.0042,
         "cost": 0.0581
        }
       ]
      }
     }
    },
    {
     "version": "5.2",
     "label": "GPT-5.2",
     "released": "2025-12-11",
     "scores": {
      "v1_Semi_Private": {
       "n": 5,
       "mean": 0.61102,
       "min": 0.1233,
       "max": 0.8617,
       "meanCost": 0.40746000000000004,
       "bestCost": 0.96,
       "variants": [
        {
         "name": "XHigh",
         "score": 0.8617,
         "cost": 0.96
        },
        {
         "name": "High",
         "score": 0.7867,
         "cost": 0.5196
        },
        {
         "name": "Medium",
         "score": 0.7267,
         "cost": 0.3448
        },
        {
         "name": "Low",
         "score": 0.5567,
         "cost": 0.1657
        },
        {
         "name": "GPT-5.2",
         "score": 0.1233,
         "cost": 0.0472
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 5,
       "mean": 0.26692,
       "min": 0.0083,
       "max": 0.5291,
       "meanCost": 0.8793200000000001,
       "bestCost": 1.8982,
       "variants": [
        {
         "name": "XHigh",
         "score": 0.5291,
         "cost": 1.8982
        },
        {
         "name": "High",
         "score": 0.4333,
         "cost": 1.393
        },
        {
         "name": "Medium",
         "score": 0.2667,
         "cost": 0.7594
        },
        {
         "name": "Low",
         "score": 0.0972,
         "cost": 0.2642
        },
        {
         "name": "GPT-5.2",
         "score": 0.0083,
         "cost": 0.0818
        }
       ]
      }
     }
    },
    {
     "version": "5.4",
     "label": "GPT-5.4",
     "released": "2026-03-04",
     "scores": {
      "v1_Semi_Private": {
       "n": 4,
       "mean": 0.8517,
       "min": 0.6817,
       "max": 0.9367,
       "meanCost": 0.3475,
       "bestCost": 0.62,
       "variants": [
        {
         "name": "XHigh",
         "score": 0.9367,
         "cost": 0.62
        },
        {
         "name": "High",
         "score": 0.9267,
         "cost": 0.37
        },
        {
         "name": "Medium",
         "score": 0.8617,
         "cost": 0.25
        },
        {
         "name": "Low",
         "score": 0.6817,
         "cost": 0.15
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 4,
       "mean": 0.5651,
       "min": 0.2917,
       "max": 0.7395,
       "meanCost": 0.8725,
       "bestCost": 1.52,
       "variants": [
        {
         "name": "XHigh",
         "score": 0.7395,
         "cost": 1.52
        },
        {
         "name": "High",
         "score": 0.675,
         "cost": 1.02
        },
        {
         "name": "Medium",
         "score": 0.5542,
         "cost": 0.68
        },
        {
         "name": "Low",
         "score": 0.2917,
         "cost": 0.27
        }
       ]
      },
      "v3_Semi_Private": {
       "n": 1,
       "mean": 0.0021,
       "min": 0.0021,
       "max": 0.0021,
       "meanCost": null,
       "bestCost": null,
       "variants": [
        {
         "name": "High",
         "score": 0.0021,
         "cost": null
        }
       ]
      }
     }
    },
    {
     "version": "5.5",
     "label": "GPT-5.5",
     "released": "2026-04-22",
     "scores": {
      "v1_Semi_Private": {
       "n": 4,
       "mean": 0.8946,
       "min": 0.7617,
       "max": 0.95,
       "meanCost": 0.47000000000000003,
       "bestCost": 0.73,
       "variants": [
        {
         "name": "XHigh",
         "score": 0.95,
         "cost": 0.73
        },
        {
         "name": "High",
         "score": 0.945,
         "cost": 0.56
        },
        {
         "name": "Medium",
         "score": 0.9217,
         "cost": 0.39
        },
        {
         "name": "Low",
         "score": 0.7617,
         "cost": 0.2
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 4,
       "mean": 0.6802,
       "min": 0.3333,
       "max": 0.85,
       "meanCost": 1.1325,
       "bestCost": 1.87,
       "variants": [
        {
         "name": "XHigh",
         "score": 0.85,
         "cost": 1.87
        },
        {
         "name": "High",
         "score": 0.8333,
         "cost": 1.45
        },
        {
         "name": "Medium",
         "score": 0.7042,
         "cost": 0.86
        },
        {
         "name": "Low",
         "score": 0.3333,
         "cost": 0.35
        }
       ]
      },
      "v3_Semi_Private": {
       "n": 1,
       "mean": 0.0043,
       "min": 0.0043,
       "max": 0.0043,
       "meanCost": null,
       "bestCost": null,
       "variants": [
        {
         "name": "High",
         "score": 0.0043,
         "cost": null
        }
       ]
      }
     }
    },
    {
     "version": "5.6 Sol",
     "label": "GPT-5.6 Sol",
     "released": "2026-07-09",
     "scores": {
      "v1_Semi_Private": {
       "n": 5,
       "mean": 0.916,
       "min": 0.745,
       "max": 0.975,
       "meanCost": 0.326,
       "bestCost": 0.4,
       "variants": [
        {
         "name": "XHigh",
         "score": 0.975,
         "cost": 0.4
        },
        {
         "name": "High",
         "score": 0.97,
         "cost": 0.3
        },
        {
         "name": "Max",
         "score": 0.965,
         "cost": 0.54
        },
        {
         "name": "Medium",
         "score": 0.925,
         "cost": 0.22
        },
        {
         "name": "Low",
         "score": 0.745,
         "cost": 0.17
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 5,
       "mean": 0.755,
       "min": 0.425,
       "max": 0.925,
       "meanCost": 0.8019999999999999,
       "bestCost": 1.44,
       "variants": [
        {
         "name": "Max",
         "score": 0.925,
         "cost": 1.44
        },
        {
         "name": "XHigh",
         "score": 0.9,
         "cost": 1.04
        },
        {
         "name": "High",
         "score": 0.8542,
         "cost": 0.74
        },
        {
         "name": "Medium",
         "score": 0.6708,
         "cost": 0.47
        },
        {
         "name": "Low",
         "score": 0.425,
         "cost": 0.32
        }
       ]
      },
      "v3_Semi_Private": {
       "n": 5,
       "mean": 0.03664,
       "min": 0.0033,
       "max": 0.0778,
       "meanCost": null,
       "bestCost": null,
       "variants": [
        {
         "name": "Max",
         "score": 0.0778,
         "cost": null
        },
        {
         "name": "XHigh",
         "score": 0.0699,
         "cost": null
        },
        {
         "name": "High",
         "score": 0.0215,
         "cost": null
        },
        {
         "name": "Medium",
         "score": 0.0107,
         "cost": null
        },
        {
         "name": "Low",
         "score": 0.0033,
         "cost": null
        }
       ]
      }
     }
    },
    {
     "version": "6 Astra",
     "label": "GPT-6 Astra",
     "released": "2026-09-02",
     "scores": {
      "v1_Semi_Private": {
       "n": 6,
       "mean": 0.9575,
       "min": 0.86,
       "max": 0.985,
       "meanCost": 0.29070945000000004,
       "bestCost": 0.3470552,
       "variants": [
        {
         "name": "XHigh",
         "score": 0.985,
         "cost": 0.3470552
        },
        {
         "name": "High",
         "score": 0.985,
         "cost": 0.2837032
        },
        {
         "name": "Max",
         "score": 0.975,
         "cost": 0.4328827000000001
        },
        {
         "name": "Medium",
         "score": 0.975,
         "cost": 0.2398342000000002
        },
        {
         "name": "Low",
         "score": 0.965,
         "cost": 0.22650770000000006
        },
        {
         "name": "None",
         "score": 0.86,
         "cost": 0.21427369999999996
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 6,
       "mean": 0.8624999999999999,
       "min": 0.5958333333333333,
       "max": 0.95,
       "meanCost": 0.6470403055555556,
       "bestCost": 1.1194680833333335,
       "variants": [
        {
         "name": "Max",
         "score": 0.95,
         "cost": 1.1194680833333335
        },
        {
         "name": "XHigh",
         "score": 0.9333333333333333,
         "cost": 0.8286855833333331
        },
        {
         "name": "High",
         "score": 0.9208333333333333,
         "cost": 0.6680793333333332
        },
        {
         "name": "Medium",
         "score": 0.9208333333333333,
         "cost": 0.4800926666666667
        },
        {
         "name": "Low",
         "score": 0.8541666666666666,
         "cost": 0.4162418333333334
        },
        {
         "name": "None",
         "score": 0.5958333333333333,
         "cost": 0.3696743333333333
        }
       ]
      },
      "v3_Semi_Private": {
       "n": 6,
       "mean": 0.44682075507347463,
       "min": 0.17452190401133805,
       "max": 0.6271280210060628,
       "meanCost": null,
       "bestCost": null,
       "variants": [
        {
         "name": "Max",
         "score": 0.6271280210060628,
         "cost": null
        },
        {
         "name": "XHigh",
         "score": 0.5934295409146055,
         "cost": null
        },
        {
         "name": "High",
         "score": 0.5481905163612231,
         "cost": null
        },
        {
         "name": "Medium",
         "score": 0.3858757449733784,
         "cost": null
        },
        {
         "name": "None",
         "score": 0.35177880317424,
         "cost": null
        },
        {
         "name": "Low",
         "score": 0.17452190401133805,
         "cost": null
        }
       ]
      }
     }
    }
   ]
  },
  {
   "id": "gpt-pro",
   "name": "GPT Pro",
   "provider": "OpenAI",
   "featured": false,
   "versions": [
    {
     "version": "5 Pro",
     "label": "GPT-5 Pro",
     "released": "2025-10-06",
     "scores": {
      "v1_Semi_Private": {
       "n": 1,
       "mean": 0.7017,
       "min": 0.7017,
       "max": 0.7017,
       "meanCost": 4.7785,
       "bestCost": 4.7785,
       "variants": [
        {
         "name": "GPT-5 Pro",
         "score": 0.7017,
         "cost": 4.7785
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 1,
       "mean": 0.1833,
       "min": 0.1833,
       "max": 0.1833,
       "meanCost": 7.1432,
       "bestCost": 7.1432,
       "variants": [
        {
         "name": "GPT-5 Pro",
         "score": 0.1833,
         "cost": 7.1432
        }
       ]
      }
     }
    },
    {
     "version": "5.2 Pro",
     "label": "GPT-5.2 Pro",
     "released": "2025-12-11",
     "scores": {
      "v1_Semi_Private": {
       "n": 3,
       "mean": 0.8578,
       "min": 0.8117,
       "max": 0.905,
       "meanCost": 7.166999999999999,
       "bestCost": 11.6542,
       "variants": [
        {
         "name": "XHigh",
         "score": 0.905,
         "cost": 11.6542
        },
        {
         "name": "High",
         "score": 0.8567,
         "cost": 5.8694
        },
        {
         "name": "Medium",
         "score": 0.8117,
         "cost": 3.9774
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 2,
       "mean": 0.46314999999999995,
       "min": 0.3847,
       "max": 0.5416,
       "meanCost": 12.3569,
       "bestCost": 15.721,
       "variants": [
        {
         "name": "High",
         "score": 0.5416,
         "cost": 15.721
        },
        {
         "name": "Medium",
         "score": 0.3847,
         "cost": 8.9928
        }
       ]
      }
     }
    },
    {
     "version": "5.4 Pro",
     "label": "GPT-5.4 Pro",
     "released": "2026-03-04",
     "scores": {
      "v1_Semi_Private": {
       "n": 1,
       "mean": 0.945,
       "min": 0.945,
       "max": 0.945,
       "meanCost": 7.21,
       "bestCost": 7.21,
       "variants": [
        {
         "name": "XHigh",
         "score": 0.945,
         "cost": 7.21
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 1,
       "mean": 0.8333,
       "min": 0.8333,
       "max": 0.8333,
       "meanCost": 16.41,
       "bestCost": 16.41,
       "variants": [
        {
         "name": "XHigh",
         "score": 0.8333,
         "cost": 16.41
        }
       ]
      }
     }
    },
    {
     "version": "5.5 Pro",
     "label": "GPT-5.5 Pro",
     "released": "2026-04-23",
     "scores": {
      "v1_Semi_Private": {
       "n": 2,
       "mean": 0.9575,
       "min": 0.95,
       "max": 0.965,
       "meanCost": 4.525,
       "bestCost": 4.53,
       "variants": [
        {
         "name": "High",
         "score": 0.965,
         "cost": 4.53
        },
        {
         "name": "XHigh",
         "score": 0.95,
         "cost": 4.52
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 2,
       "mean": 0.8437,
       "min": 0.8416,
       "max": 0.8458,
       "meanCost": 10.635,
       "bestCost": 10.51,
       "variants": [
        {
         "name": "High",
         "score": 0.8458,
         "cost": 10.51
        },
        {
         "name": "XHigh",
         "score": 0.8416,
         "cost": 10.76
        }
       ]
      }
     }
    }
   ]
  },
  {
   "id": "gpt-luna",
   "name": "GPT Luna",
   "provider": "OpenAI",
   "featured": false,
   "versions": [
    {
     "version": "5.6 Luna",
     "label": "GPT-5.6 Luna",
     "released": "2026-07-09",
     "scores": {
      "v1_Semi_Private": {
       "n": 5,
       "mean": 0.68568,
       "min": 0.3417,
       "max": 0.88,
       "meanCost": 0.152,
       "bestCost": 0.32,
       "variants": [
        {
         "name": "Max",
         "score": 0.88,
         "cost": 0.32
        },
        {
         "name": "XHigh",
         "score": 0.8767,
         "cost": 0.21
        },
        {
         "name": "High",
         "score": 0.765,
         "cost": 0.13
        },
        {
         "name": "Medium",
         "score": 0.565,
         "cost": 0.06
        },
        {
         "name": "Low",
         "score": 0.3417,
         "cost": 0.04
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 5,
       "mean": 0.29798,
       "min": 0.0514,
       "max": 0.5954,
       "meanCost": 0.336,
       "bestCost": 0.67,
       "variants": [
        {
         "name": "Max",
         "score": 0.5954,
         "cost": 0.67
        },
        {
         "name": "XHigh",
         "score": 0.4764,
         "cost": 0.54
        },
        {
         "name": "High",
         "score": 0.2931,
         "cost": 0.29
        },
        {
         "name": "Medium",
         "score": 0.0736,
         "cost": 0.11
        },
        {
         "name": "Low",
         "score": 0.0514,
         "cost": 0.07
        }
       ]
      },
      "v3_Semi_Private": {
       "n": 5,
       "mean": 0.0012799999999999999,
       "min": 0.0002,
       "max": 0.0018,
       "meanCost": null,
       "bestCost": null,
       "variants": [
        {
         "name": "Max",
         "score": 0.0018,
         "cost": null
        },
        {
         "name": "Low",
         "score": 0.0017,
         "cost": null
        },
        {
         "name": "Medium",
         "score": 0.0017,
         "cost": null
        },
        {
         "name": "High",
         "score": 0.001,
         "cost": null
        },
        {
         "name": "XHigh",
         "score": 0.0002,
         "cost": null
        }
       ]
      }
     }
    },
    {
     "version": "5.6 Luna (30.07)",
     "label": "GPT-5.6 Luna (30.07)",
     "released": "2026-07-30",
     "scores": {
      "v1_Semi_Private": {
       "n": 6,
       "mean": 0.5841666666666666,
       "min": 0.03333333333333333,
       "max": 0.9066666666666666,
       "meanCost": 0.027279745999999997,
       "bestCost": 0.06538362,
       "variants": [
        {
         "name": "Max",
         "score": 0.9066666666666666,
         "cost": 0.06538362
        },
        {
         "name": "XHigh",
         "score": 0.85,
         "cost": 0.045517572
        },
        {
         "name": "High",
         "score": 0.78,
         "cost": 0.027887351999999997
        },
        {
         "name": "Medium",
         "score": 0.54,
         "cost": 0.01202556
        },
        {
         "name": "Low",
         "score": 0.395,
         "cost": 0.008206092
        },
        {
         "name": "None",
         "score": 0.03333333333333333,
         "cost": 0.004658280000000002
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 6,
       "mean": 0.2469907407407407,
       "min": 0.008333333333333333,
       "max": 0.5958333333333333,
       "meanCost": 0.06894284416666667,
       "bestCost": 0.17671712499999995,
       "variants": [
        {
         "name": "Max",
         "score": 0.5958333333333333,
         "cost": 0.17671712499999995
        },
        {
         "name": "XHigh",
         "score": 0.4347222222222222,
         "cost": 0.13048743000000002
        },
        {
         "name": "High",
         "score": 0.3333333333333333,
         "cost": 0.06253926000000003
        },
        {
         "name": "Medium",
         "score": 0.0736111111111111,
         "cost": 0.02209704
        },
        {
         "name": "Low",
         "score": 0.03611111111111111,
         "cost": 0.013629859999999995
        },
        {
         "name": "None",
         "score": 0.008333333333333333,
         "cost": 0.008186350000000002
        }
       ]
      }
     }
    },
    {
     "version": "6 Luna",
     "label": "GPT-6 Luna",
     "released": "2026-09-22",
     "scores": {
      "v1_Semi_Private": {
       "n": 6,
       "mean": 0.5625,
       "min": 0.08833333333333333,
       "max": 0.8666666666666667,
       "meanCost": 0.008587373666666667,
       "bestCost": 0.018388256999999998,
       "variants": [
        {
         "name": "Max",
         "score": 0.8666666666666667,
         "cost": 0.018388256999999998
        },
        {
         "name": "XHigh",
         "score": 0.73,
         "cost": 0.012172242
        },
        {
         "name": "High",
         "score": 0.7033333333333333,
         "cost": 0.009497197
        },
        {
         "name": "Medium",
         "score": 0.61,
         "cost": 0.0061084369999999995
        },
        {
         "name": "Low",
         "score": 0.37666666666666665,
         "cost": 0.0032099620000000002
        },
        {
         "name": "None",
         "score": 0.08833333333333333,
         "cost": 0.0021481470000000004
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 6,
       "mean": 0.2587962962962963,
       "min": 0.0,
       "max": 0.5930555555555556,
       "meanCost": 0.02310772097222222,
       "bestCost": 0.06181100083333334,
       "variants": [
        {
         "name": "Max",
         "score": 0.5930555555555556,
         "cost": 0.06181100083333334
        },
        {
         "name": "XHigh",
         "score": 0.41944444444444445,
         "cost": 0.032297893333333334
        },
        {
         "name": "High",
         "score": 0.3138888888888889,
         "cost": 0.02336191
        },
        {
         "name": "Medium",
         "score": 0.18055555555555555,
         "cost": 0.012202668333333333
        },
        {
         "name": "Low",
         "score": 0.04583333333333333,
         "cost": 0.005273818333333334
        },
        {
         "name": "None",
         "score": 0.0,
         "cost": 0.0036990350000000003
        }
       ]
      },
      "v3_Semi_Private": {
       "n": 6,
       "mean": 0.001171616411225504,
       "min": 0.0002791945504283949,
       "max": 0.0019415284639354709,
       "meanCost": null,
       "bestCost": null,
       "variants": [
        {
         "name": "Medium",
         "score": 0.0019415284639354709,
         "cost": null
        },
        {
         "name": "High",
         "score": 0.0018024216987988248,
         "cost": null
        },
        {
         "name": "XHigh",
         "score": 0.0016413333960356602,
         "cost": null
        },
        {
         "name": "Max",
         "score": 0.0010360997760319559,
         "cost": null
        },
        {
         "name": "Low",
         "score": 0.0003291205821227175,
         "cost": null
        },
        {
         "name": "None",
         "score": 0.0002791945504283949,
         "cost": null
        }
       ]
      }
     }
    }
   ]
  },
  {
   "id": "gpt-mini",
   "name": "GPT mini",
   "provider": "OpenAI",
   "featured": false,
   "versions": [
    {
     "version": "5 mini",
     "label": "GPT-5 mini",
     "released": "2025-08-07",
     "scores": {
      "v1_Semi_Private": {
       "n": 4,
       "mean": 0.3083,
       "min": 0.0533,
       "max": 0.5433,
       "meanCost": 0.043825,
       "bestCost": 0.116,
       "variants": [
        {
         "name": "High",
         "score": 0.5433,
         "cost": 0.116
        },
        {
         "name": "Medium",
         "score": 0.3733,
         "cost": 0.0401
        },
        {
         "name": "Low",
         "score": 0.2633,
         "cost": 0.0135
        },
        {
         "name": "Minimal",
         "score": 0.0533,
         "cost": 0.0057
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 4,
       "mean": 0.027425,
       "min": 0.0083,
       "max": 0.0444,
       "meanCost": 0.072225,
       "bestCost": 0.1977,
       "variants": [
        {
         "name": "High",
         "score": 0.0444,
         "cost": 0.1977
        },
        {
         "name": "Medium",
         "score": 0.0403,
         "cost": 0.0629
        },
        {
         "name": "Minimal",
         "score": 0.0167,
         "cost": 0.0094
        },
        {
         "name": "Low",
         "score": 0.0083,
         "cost": 0.0189
        }
       ]
      }
     }
    },
    {
     "version": "5.4 mini",
     "label": "GPT-5.4 mini",
     "released": "2026-03-17",
     "scores": {
      "v1_Semi_Private": {
       "n": 4,
       "mean": 0.43875,
       "min": 0.13,
       "max": 0.6367,
       "meanCost": 0.245,
       "bestCost": 0.51,
       "variants": [
        {
         "name": "XHigh",
         "score": 0.6367,
         "cost": 0.51
        },
        {
         "name": "High",
         "score": 0.58,
         "cost": 0.27
        },
        {
         "name": "Medium",
         "score": 0.4083,
         "cost": 0.16
        },
        {
         "name": "Low",
         "score": 0.13,
         "cost": 0.04
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 4,
       "mean": 0.0941,
       "min": 0.0111,
       "max": 0.189,
       "meanCost": 0.42500000000000004,
       "bestCost": 0.75,
       "variants": [
        {
         "name": "XHigh",
         "score": 0.189,
         "cost": 0.75
        },
        {
         "name": "High",
         "score": 0.1319,
         "cost": 0.56
        },
        {
         "name": "Medium",
         "score": 0.0444,
         "cost": 0.33
        },
        {
         "name": "Low",
         "score": 0.0111,
         "cost": 0.06
        }
       ]
      }
     }
    }
   ]
  },
  {
   "id": "gemini-pro",
   "name": "Gemini Pro",
   "provider": "Google",
   "featured": true,
   "versions": [
    {
     "version": "2.5 Pro",
     "label": "Gemini 2.5 Pro",
     "released": "2025-06-17",
     "scores": {
      "v1_Semi_Private": {
       "n": 4,
       "mean": 0.30874999999999997,
       "min": 0.16,
       "max": 0.41,
       "meanCost": 0.33705,
       "bestCost": 0.4839,
       "variants": [
        {
         "name": "Thinking 16K",
         "score": 0.41,
         "cost": 0.4839
        },
        {
         "name": "Thinking 32K",
         "score": 0.37,
         "cost": 0.5123
        },
        {
         "name": "Thinking 8K",
         "score": 0.295,
         "cost": 0.2947
        },
        {
         "name": "Thinking 1K",
         "score": 0.16,
         "cost": 0.0573
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 4,
       "mean": 0.029525,
       "min": 0,
       "max": 0.0486,
       "meanCost": 0.5009750000000001,
       "bestCost": 0.757,
       "variants": [
        {
         "name": "Thinking 32K",
         "score": 0.0486,
         "cost": 0.757
        },
        {
         "name": "Thinking 16K",
         "score": 0.0403,
         "cost": 0.7145
        },
        {
         "name": "Thinking 8K",
         "score": 0.0292,
         "cost": 0.4439
        },
        {
         "name": "Thinking 1K",
         "score": 0,
         "cost": 0.0885
        }
       ]
      }
     }
    },
    {
     "version": "3 Pro",
     "label": "Gemini 3 Pro",
     "released": "2025-11-18",
     "scores": {
      "v1_Semi_Private": {
       "n": 1,
       "mean": 0.75,
       "min": 0.75,
       "max": 0.75,
       "meanCost": 0.4926,
       "bestCost": 0.4926,
       "variants": [
        {
         "name": "Gemini 3 Pro",
         "score": 0.75,
         "cost": 0.4926
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 1,
       "mean": 0.3111,
       "min": 0.3111,
       "max": 0.3111,
       "meanCost": 0.8109,
       "bestCost": 0.8109,
       "variants": [
        {
         "name": "Gemini 3 Pro",
         "score": 0.3111,
         "cost": 0.8109
        }
       ]
      }
     }
    },
    {
     "version": "3.1 Pro",
     "label": "Gemini 3.1 Pro",
     "released": "2026-02-19",
     "scores": {
      "v1_Semi_Private": {
       "n": 1,
       "mean": 0.98,
       "min": 0.98,
       "max": 0.98,
       "meanCost": 0.5223,
       "bestCost": 0.5223,
       "variants": [
        {
         "name": "Preview",
         "score": 0.98,
         "cost": 0.5223
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 1,
       "mean": 0.7708,
       "min": 0.7708,
       "max": 0.7708,
       "meanCost": 0.9622,
       "bestCost": 0.9622,
       "variants": [
        {
         "name": "Preview",
         "score": 0.7708,
         "cost": 0.9622
        }
       ]
      },
      "v3_Semi_Private": {
       "n": 1,
       "mean": 0.0042,
       "min": 0.0042,
       "max": 0.0042,
       "meanCost": null,
       "bestCost": null,
       "variants": [
        {
         "name": "Preview",
         "score": 0.0042,
         "cost": null
        }
       ]
      }
     }
    }
   ]
  },
  {
   "id": "gemini-flash",
   "name": "Gemini Flash",
   "provider": "Google",
   "featured": false,
   "versions": [
    {
     "version": "2.0 Flash",
     "label": "Gemini 2.0 Flash",
     "released": "2025-02-02",
     "scores": {
      "v2_Semi_Private": {
       "n": 1,
       "mean": 0.013,
       "min": 0.013,
       "max": 0.013,
       "meanCost": 0.004,
       "bestCost": 0.004,
       "variants": [
        {
         "name": "Gemini 2.0 Flash",
         "score": 0.013,
         "cost": 0.004
        }
       ]
      }
     }
    },
    {
     "version": "2.5 Flash",
     "label": "Gemini 2.5 Flash",
     "released": "2025-05-20",
     "scores": {
      "v1_Semi_Private": {
       "n": 5,
       "mean": 0.28164,
       "min": 0.16,
       "max": 0.3333,
       "meanCost": 0.12352,
       "bestCost": 0.0371,
       "variants": [
        {
         "name": "Preview",
         "score": 0.3333,
         "cost": 0.0371
        },
        {
         "name": "Thinking 16K",
         "score": 0.3333,
         "cost": 0.2134
        },
        {
         "name": "Thinking 24K",
         "score": 0.3233,
         "cost": 0.1971
        },
        {
         "name": "Thinking 8K",
         "score": 0.2583,
         "cost": 0.1344
        },
        {
         "name": "Thinking 1K",
         "score": 0.16,
         "cost": 0.0356
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 5,
       "mean": 0.02098,
       "min": 0.0169,
       "max": 0.0254,
       "meanCost": 0.18460000000000001,
       "bestCost": 0.3191,
       "variants": [
        {
         "name": "Thinking 24K",
         "score": 0.0254,
         "cost": 0.3191
        },
        {
         "name": "Thinking 1K",
         "score": 0.0216,
         "cost": 0.0302
        },
        {
         "name": "Thinking 8K",
         "score": 0.0212,
         "cost": 0.1994
        },
        {
         "name": "Thinking 16K",
         "score": 0.0198,
         "cost": 0.3173
        },
        {
         "name": "Preview",
         "score": 0.0169,
         "cost": 0.057
        }
       ]
      }
     }
    },
    {
     "version": "3 Flash",
     "label": "Gemini 3 Flash",
     "released": "2025-12-17",
     "scores": {
      "v1_Semi_Private": {
       "n": 4,
       "mean": 0.4821,
       "min": 0.215,
       "max": 0.8467,
       "meanCost": 0.06595000000000001,
       "bestCost": 0.1743,
       "variants": [
        {
         "name": "High",
         "score": 0.8467,
         "cost": 0.1743
        },
        {
         "name": "Medium",
         "score": 0.5767,
         "cost": 0.0612
        },
        {
         "name": "Low",
         "score": 0.29,
         "cost": 0.0163
        },
        {
         "name": "Minimal",
         "score": 0.215,
         "cost": 0.012
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 4,
       "mean": 0.127425,
       "min": 0.0125,
       "max": 0.3361,
       "meanCost": 0.0898,
       "bestCost": 0.2314,
       "variants": [
        {
         "name": "High",
         "score": 0.3361,
         "cost": 0.2314
        },
        {
         "name": "Medium",
         "score": 0.1278,
         "cost": 0.0824
        },
        {
         "name": "Minimal",
         "score": 0.0333,
         "cost": 0.0205
        },
        {
         "name": "Low",
         "score": 0.0125,
         "cost": 0.0249
        }
       ]
      }
     }
    },
    {
     "version": "3.5 Flash",
     "label": "Gemini 3.5 Flash",
     "released": "2026-05-19",
     "scores": {
      "v1_Semi_Private": {
       "n": 2,
       "mean": 0.70665,
       "min": 0.4883,
       "max": 0.925,
       "meanCost": 0.24615,
       "bestCost": 0.4278,
       "variants": [
        {
         "name": "High",
         "score": 0.925,
         "cost": 0.4278
        },
        {
         "name": "Minimal",
         "score": 0.4883,
         "cost": 0.0645
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 2,
       "mean": 0.40485,
       "min": 0.0889,
       "max": 0.7208,
       "meanCost": 0.47885,
       "bestCost": 0.8503,
       "variants": [
        {
         "name": "High",
         "score": 0.7208,
         "cost": 0.8503
        },
        {
         "name": "Minimal",
         "score": 0.0889,
         "cost": 0.1074
        }
       ]
      }
     }
    },
    {
     "version": "3.6 Flash",
     "label": "Gemini 3.6 Flash",
     "released": "2026-07-21",
     "scores": {
      "v1_Semi_Private": {
       "n": 4,
       "mean": 0.7133333333333333,
       "min": 0.345,
       "max": 0.9116666666666666,
       "meanCost": 0.18624742874999997,
       "bestCost": 0.33563630999999994,
       "variants": [
        {
         "name": "High",
         "score": 0.9116666666666666,
         "cost": 0.33563630999999994
        },
        {
         "name": "Medium",
         "score": 0.8316666666666666,
         "cost": 0.24685820999999994
        },
        {
         "name": "Low",
         "score": 0.765,
         "cost": 0.12124633500000005
        },
        {
         "name": "Minimal",
         "score": 0.345,
         "cost": 0.04124886
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 4,
       "mean": 0.3597222222222222,
       "min": 0.02638888888888889,
       "max": 0.6041666666666666,
       "meanCost": 0.338851865625,
       "bestCost": 0.6060796625000002,
       "variants": [
        {
         "name": "High",
         "score": 0.6041666666666666,
         "cost": 0.6060796625000002
        },
        {
         "name": "Medium",
         "score": 0.5041666666666667,
         "cost": 0.45550909999999994
        },
        {
         "name": "Low",
         "score": 0.30416666666666664,
         "cost": 0.22297816250000002
        },
        {
         "name": "Minimal",
         "score": 0.02638888888888889,
         "cost": 0.07084053750000002
        }
       ]
      }
     }
    },
    {
     "version": "3.7 Flash",
     "label": "Gemini 3.7 Flash",
     "released": "2026-08-13",
     "scores": {
      "v1_Semi_Private": {
       "n": 3,
       "mean": 0.9061111111111111,
       "min": 0.8516666666666666,
       "max": 0.955,
       "meanCost": 0.07428093,
       "bestCost": 0.12013233,
       "variants": [
        {
         "name": "High",
         "score": 0.955,
         "cost": 0.12013233
        },
        {
         "name": "Medium",
         "score": 0.9116666666666666,
         "cost": 0.060503167499999996
        },
        {
         "name": "Low",
         "score": 0.8516666666666666,
         "cost": 0.0422072925
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 3,
       "mean": 0.6708333333333334,
       "min": 0.5291666666666667,
       "max": 0.8458333333333333,
       "meanCost": 0.14822149791666667,
       "bestCost": 0.24944951875000002,
       "variants": [
        {
         "name": "High",
         "score": 0.8458333333333333,
         "cost": 0.24944951875000002
        },
        {
         "name": "Medium",
         "score": 0.6375,
         "cost": 0.11582842499999997
        },
        {
         "name": "Low",
         "score": 0.5291666666666667,
         "cost": 0.07938655
        }
       ]
      }
     }
    }
   ]
  },
  {
   "id": "grok",
   "name": "Grok",
   "provider": "xAI",
   "featured": true,
   "versions": [
    {
     "version": "3",
     "label": "Grok 3",
     "released": "2025-02-19",
     "scores": {
      "v1_Semi_Private": {
       "n": 1,
       "mean": 0.055,
       "min": 0.055,
       "max": 0.055,
       "meanCost": 0.0931,
       "bestCost": 0.0931,
       "variants": [
        {
         "name": "Grok 3",
         "score": 0.055,
         "cost": 0.0931
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 1,
       "mean": 0.0,
       "min": 0,
       "max": 0,
       "meanCost": 0.1421,
       "bestCost": 0.1421,
       "variants": [
        {
         "name": "Grok 3",
         "score": 0,
         "cost": 0.1421
        }
       ]
      }
     }
    },
    {
     "version": "4",
     "label": "Grok 4",
     "released": "2025-07-09",
     "scores": {
      "v1_Semi_Private": {
       "n": 1,
       "mean": 0.6667,
       "min": 0.6667,
       "max": 0.6667,
       "meanCost": 1.0136,
       "bestCost": 1.0136,
       "variants": [
        {
         "name": "Thinking",
         "score": 0.6667,
         "cost": 1.0136
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 1,
       "mean": 0.15975,
       "min": 0.15975,
       "max": 0.15975,
       "meanCost": 2.1659,
       "bestCost": 2.1659,
       "variants": [
        {
         "name": "Thinking",
         "score": 0.15975,
         "cost": 2.1659
        }
       ]
      }
     }
    },
    {
     "version": "4.20",
     "label": "Grok 4.20",
     "released": "2026-03-09",
     "scores": {
      "v1_Semi_Private": {
       "n": 1,
       "mean": 0.895,
       "min": 0.895,
       "max": 0.895,
       "meanCost": 0.35,
       "bestCost": 0.35,
       "variants": [
        {
         "name": "Reasoning",
         "score": 0.895,
         "cost": 0.35
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 1,
       "mean": 0.6514,
       "min": 0.6514,
       "max": 0.6514,
       "meanCost": 0.92,
       "bestCost": 0.92,
       "variants": [
        {
         "name": "Reasoning",
         "score": 0.6514,
         "cost": 0.92
        }
       ]
      },
      "v3_Semi_Private": {
       "n": 1,
       "mean": 0.0009,
       "min": 0.0009,
       "max": 0.0009,
       "meanCost": null,
       "bestCost": null,
       "variants": [
        {
         "name": "Beta Reasoning",
         "score": 0.0009,
         "cost": null
        }
       ]
      }
     }
    },
    {
     "version": "4.5",
     "label": "Grok 4.5",
     "released": "2026-07-16",
     "scores": {
      "v1_Semi_Private": {
       "n": 3,
       "mean": 0.8400333333333334,
       "min": 0.7917,
       "max": 0.8717,
       "meanCost": 0.2733333333333334,
       "bestCost": 0.31,
       "variants": [
        {
         "name": "Medium",
         "score": 0.8717,
         "cost": 0.31
        },
        {
         "name": "High",
         "score": 0.8567,
         "cost": 0.33
        },
        {
         "name": "Low",
         "score": 0.7917,
         "cost": 0.18
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 3,
       "mean": 0.46113333333333334,
       "min": 0.3306,
       "max": 0.5264,
       "meanCost": 0.6433333333333334,
       "bestCost": 0.78,
       "variants": [
        {
         "name": "High",
         "score": 0.5264,
         "cost": 0.78
        },
        {
         "name": "Medium",
         "score": 0.5264,
         "cost": 0.75
        },
        {
         "name": "Low",
         "score": 0.3306,
         "cost": 0.4
        }
       ]
      },
      "v3_Semi_Private": {
       "n": 3,
       "mean": 0.0029333333333333334,
       "min": 0.0026,
       "max": 0.0032,
       "meanCost": null,
       "bestCost": null,
       "variants": [
        {
         "name": "Medium",
         "score": 0.0032,
         "cost": null
        },
        {
         "name": "High",
         "score": 0.003,
         "cost": null
        },
        {
         "name": "Low",
         "score": 0.0026,
         "cost": null
        }
       ]
      }
     }
    },
    {
     "version": "4.6",
     "label": "Grok 4.6",
     "released": "2026-08-11",
     "scores": {
      "v1_Semi_Private": {
       "n": 4,
       "mean": 0.8408333333333333,
       "min": 0.7483333333333334,
       "max": 0.875,
       "meanCost": 0.269910335,
       "bestCost": 0.30111846000000003,
       "variants": [
        {
         "name": "Medium",
         "score": 0.875,
         "cost": 0.30111846000000003
        },
        {
         "name": "XHigh",
         "score": 0.87,
         "cost": 0.348182
        },
        {
         "name": "High",
         "score": 0.87,
         "cost": 0.3268656
        },
        {
         "name": "Low",
         "score": 0.7483333333333334,
         "cost": 0.10347528000000006
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 4,
       "mean": 0.5527777777777778,
       "min": 0.2763888888888889,
       "max": 0.6708333333333333,
       "meanCost": 0.590611775,
       "bestCost": 0.7574904499999999,
       "variants": [
        {
         "name": "XHigh",
         "score": 0.6708333333333333,
         "cost": 0.7574904499999999
        },
        {
         "name": "High",
         "score": 0.6513888888888888,
         "cost": 0.7338575666666665
        },
        {
         "name": "Medium",
         "score": 0.6125,
         "cost": 0.6586968666666668
        },
        {
         "name": "Low",
         "score": 0.2763888888888889,
         "cost": 0.2124022166666667
        }
       ]
      },
      "v3_Semi_Private": {
       "n": 1,
       "mean": 0.0211,
       "min": 0.0211,
       "max": 0.0211,
       "meanCost": null,
       "bestCost": null,
       "variants": [
        {
         "name": "XHigh",
         "score": 0.0211,
         "cost": null
        }
       ]
      }
     }
    }
   ]
  },
  {
   "id": "deepseek",
   "name": "DeepSeek",
   "provider": "DeepSeek",
   "featured": true,
   "versions": [
    {
     "version": "R1",
     "label": "DeepSeek R1",
     "released": "2025-01-22",
     "scores": {
      "v1_Semi_Private": {
       "n": 1,
       "mean": 0.158,
       "min": 0.158,
       "max": 0.158,
       "meanCost": 0.06,
       "bestCost": 0.06,
       "variants": [
        {
         "name": "Deepseek R1",
         "score": 0.158,
         "cost": 0.06
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 1,
       "mean": 0.013,
       "min": 0.013,
       "max": 0.013,
       "meanCost": 0.08,
       "bestCost": 0.08,
       "variants": [
        {
         "name": "Deepseek R1",
         "score": 0.013,
         "cost": 0.08
        }
       ]
      }
     }
    },
    {
     "version": "R1 (28.05)",
     "label": "DeepSeek R1 (28.05)",
     "released": "2025-05-28",
     "scores": {
      "v1_Semi_Private": {
       "n": 1,
       "mean": 0.2121,
       "min": 0.2121,
       "max": 0.2121,
       "meanCost": 0.0464,
       "bestCost": 0.0464,
       "variants": [
        {
         "name": "05/28",
         "score": 0.2121,
         "cost": 0.0464
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 1,
       "mean": 0.0112,
       "min": 0.0112,
       "max": 0.0112,
       "meanCost": 0.0527,
       "bestCost": 0.0527,
       "variants": [
        {
         "name": "05/28",
         "score": 0.0112,
         "cost": 0.0527
        }
       ]
      }
     }
    },
    {
     "version": "V3.2",
     "label": "DeepSeek V3.2",
     "released": "2025-12-01",
     "scores": {
      "v1_Semi_Private": {
       "n": 1,
       "mean": 0.57,
       "min": 0.57,
       "max": 0.57,
       "meanCost": 0.08,
       "bestCost": 0.08,
       "variants": [
        {
         "name": "Deepseek V3.2",
         "score": 0.57,
         "cost": 0.08
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 1,
       "mean": 0.0403,
       "min": 0.0403,
       "max": 0.0403,
       "meanCost": 0.12,
       "bestCost": 0.12,
       "variants": [
        {
         "name": "Deepseek V3.2",
         "score": 0.0403,
         "cost": 0.12
        }
       ]
      }
     }
    },
    {
     "version": "V4 Pro",
     "label": "DeepSeek V4 Pro",
     "released": "2026-08-13",
     "scores": {
      "v1_Semi_Private": {
       "n": 4,
       "mean": 0.7016666666666667,
       "min": 0.13,
       "max": 0.905,
       "meanCost": 0.20122772999999994,
       "bestCost": 0.17823142919999996,
       "variants": [
        {
         "name": "Low",
         "score": 0.905,
         "cost": 0.17823142919999996
        },
        {
         "name": "Max",
         "score": 0.9,
         "cost": 0.29617841879999995
        },
        {
         "name": "High",
         "score": 0.8716666666666666,
         "cost": 0.3070726955999999
        },
        {
         "name": "None",
         "score": 0.13,
         "cost": 0.023428376399999996
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 4,
       "mean": 0.44513888888888886,
       "min": 0.008333333333333333,
       "max": 0.6125,
       "meanCost": 0.40127622700000015,
       "bestCost": 0.5976109150000003,
       "variants": [
        {
         "name": "Max",
         "score": 0.6125,
         "cost": 0.5976109150000003
        },
        {
         "name": "High",
         "score": 0.5972222222222221,
         "cost": 0.5969432040000002
        },
        {
         "name": "Low",
         "score": 0.5625,
         "cost": 0.37025881200000005
        },
        {
         "name": "None",
         "score": 0.008333333333333333,
         "cost": 0.040291977000000014
        }
       ]
      }
     }
    }
   ]
  },
  {
   "id": "kimi",
   "name": "Kimi",
   "provider": "Moonshot AI",
   "featured": true,
   "versions": [
    {
     "version": "K2.5",
     "label": "Kimi K2.5",
     "released": "2026-01-27",
     "scores": {
      "v1_Semi_Private": {
       "n": 1,
       "mean": 0.6533,
       "min": 0.6533,
       "max": 0.6533,
       "meanCost": 0.15,
       "bestCost": 0.15,
       "variants": [
        {
         "name": "Kimi K2.5",
         "score": 0.6533,
         "cost": 0.15
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 1,
       "mean": 0.1181,
       "min": 0.1181,
       "max": 0.1181,
       "meanCost": 0.28,
       "bestCost": 0.28,
       "variants": [
        {
         "name": "Kimi K2.5",
         "score": 0.1181,
         "cost": 0.28
        }
       ]
      }
     }
    },
    {
     "version": "K3",
     "label": "Kimi K3",
     "released": "2026-07-16",
     "scores": {
      "v1_Semi_Private": {
       "n": 3,
       "mean": 0.8227777777777777,
       "min": 0.6566666666666666,
       "max": 0.945,
       "meanCost": 0.4769570899999998,
       "bestCost": 0.7704815999999995,
       "variants": [
        {
         "name": "Max",
         "score": 0.945,
         "cost": 0.7704815999999995
        },
        {
         "name": "High",
         "score": 0.8666666666666666,
         "cost": 0.47977101000000005
        },
        {
         "name": "Low",
         "score": 0.6566666666666666,
         "cost": 0.18061866
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 3,
       "mean": 0.4259259259259259,
       "min": 0.12361111111111112,
       "max": 0.6041666666666666,
       "meanCost": 0.9313518750000002,
       "bestCost": 1.5926940250000003,
       "variants": [
        {
         "name": "Max",
         "score": 0.6041666666666666,
         "cost": 1.5926940250000003
        },
        {
         "name": "High",
         "score": 0.55,
         "cost": 0.9472229249999998
        },
        {
         "name": "Low",
         "score": 0.12361111111111112,
         "cost": 0.2541386750000001
        }
       ]
      }
     }
    }
   ]
  },
  {
   "id": "glm",
   "name": "GLM",
   "provider": "Z.ai",
   "featured": false,
   "versions": [
    {
     "version": "5",
     "label": "GLM-5",
     "released": "2026-02-20",
     "scores": {
      "v1_Semi_Private": {
       "n": 1,
       "mean": 0.4467,
       "min": 0.4467,
       "max": 0.4467,
       "meanCost": 0.17,
       "bestCost": 0.17,
       "variants": [
        {
         "name": "GLM-5",
         "score": 0.4467,
         "cost": 0.17
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 1,
       "mean": 0.0486,
       "min": 0.0486,
       "max": 0.0486,
       "meanCost": 0.27,
       "bestCost": 0.27,
       "variants": [
        {
         "name": "GLM-5",
         "score": 0.0486,
         "cost": 0.27
        }
       ]
      }
     }
    },
    {
     "version": "5.2",
     "label": "GLM-5.2",
     "released": "2026-06-13",
     "scores": {
      "v1_Semi_Private": {
       "n": 1,
       "mean": 0.77,
       "min": 0.77,
       "max": 0.77,
       "meanCost": 0.1916,
       "bestCost": 0.1916,
       "variants": [
        {
         "name": "GLM-5.2",
         "score": 0.77,
         "cost": 0.1916
        }
       ]
      },
      "v2_Semi_Private": {
       "n": 1,
       "mean": 0.22775,
       "min": 0.22775,
       "max": 0.22775,
       "meanCost": 0.2501,
       "bestCost": 0.2501,
       "variants": [
        {
         "name": "GLM-5.2",
         "score": 0.22775,
         "cost": 0.2501
        }
       ]
      }
     }
    }
   ]
  }
 ]
};
