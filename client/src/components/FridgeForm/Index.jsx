import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';

import { ADD_FRIDGE } from '../../utils/mutations';
import { QUERY_USER_FRIDGES } from '../../utils/queries';

import Auth from '../../utils/auth';

