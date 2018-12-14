import React from 'react'
import PropTypes from 'prop-types'
import prettyMs from 'pretty-ms'
import { Flex, Box, Border } from 'ooni-components'
// FIXME: Include 'fontWeight' to ooni-components/atoms/Text
// Using Text from rebass directly for now
import { Text } from 'rebass'

import { getTestMetadata } from '../utils'
import Badge from '../badge'

const TestGroupBadge = ({icon, name, color}) => (
  <Badge bg={color} color='color'>
    {icon} {name}
  </Badge>
)

TestGroupBadge.propTypes = {
  icon: PropTypes.element,
  name: PropTypes.string,
  color: PropTypes.string
}

const DetailsHeader = ({testName, runtime, notice}) => {
  const metadata = getTestMetadata(testName)

  return (
    <Flex py={4} alignItems='center'>
      <Box>
        <TestGroupBadge
          icon={metadata.icon}
          name={metadata.groupName}
          color={metadata.color}
        />
      </Box>
      <Box ml={1}>
        <Text fontWeight='bold'>{metadata.name}</Text>
      </Box>
      <Box mx='auto'>
        {notice && 'This is a notice'}
      </Box>
      <Box>
        Runtime: <Text is='span' fontWeight='bold'>{prettyMs(runtime * 1000)}</Text>
      </Box>
    </Flex>
  )
}

export default DetailsHeader
